import { useEffect, useRef, useState } from "react";

type ScrollspyOptions = {
  rootMargin?: string;
  threshold?: number | number[];
};

type ScrollspyResult<T extends readonly string[]> = {
  activeSection: T[number] | null;
  isIntersecting: (sectionId: T[number]) => boolean;
};

// Type-safe useScrollspy hook
export function useScrollspy<T extends readonly string[]>(
  sectionIds: T,
  options: ScrollspyOptions = {},
): ScrollspyResult<T> {
  const [activeSection, setActiveSection] = useState<T[number] | null>(null);
  const [intersectingSections, setIntersectingSections] = useState<Set<T[number]>>(new Set());
  const observer = useRef<IntersectionObserver | null>(null);

  const {
    rootMargin = "-20% 0px -35% 0px",
    threshold = 0,
  } = options;

  useEffect(() => {
    // Type-safe element collection with proper error handling
    const elements: Array<{ element: HTMLElement; id: T[number] }> = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        elements.push({ element, id });
      }
      else {
        console.warn(`useScrollspy: Element with id "${id}" not found`);
      }
    });

    if (elements.length === 0) {
      console.warn("useScrollspy: No valid elements found");
      return;
    }

    // Clean up previous observer
    observer.current?.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const newIntersecting = new Set(intersectingSections);

        entries.forEach((entry) => {
          const elementId = entry.target.id as T[number];

          if (entry.isIntersecting) {
            newIntersecting.add(elementId);
            setActiveSection(elementId);
          }
          else {
            newIntersecting.delete(elementId);
          }
        });

        setIntersectingSections(newIntersecting);

        // If no sections are intersecting, keep the last active section
        if (newIntersecting.size === 0) {
          // Optional: you might want to clear active section instead
          // setActiveSection(null);
        }
      },
      {
        rootMargin,
        threshold,
      },
    );

    // Observe all valid elements
    elements.forEach(({ element }) => {
      observer.current?.observe(element);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [sectionIds, rootMargin, threshold]);

  const isIntersecting = (sectionId: T[number]): boolean => {
    return intersectingSections.has(sectionId);
  };

  return {
    activeSection,
    isIntersecting,
  };
}
