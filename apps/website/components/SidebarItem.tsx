"use client";
import useHash from "@/hooks/useHash";
import type { Sidebar } from "@/lib/data/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { FunctionComponent } from "react";

export const SidebarItem: FunctionComponent<Sidebar & {
  isRoot?: boolean;
  activeId: string;
  index: number;
}> = ({
  title,
  href,
  activeId,
  description,
  subItems,
  isRoot,
  index,
}) => {
  const hash = useHash();
  const isActive = activeId === href.split("/").at(-1) || hash === href.split("#").at(-1);

  return (
    <div className="relative">
      <li className="mb-6 relative">
        <Link
          href={href}
          className={cn("relative text-muted-foreground", {
            "text-primary": isActive,
          })}

        >
          <h2 className={cn(" font-semibold mb-2", { "text-sm": isRoot, "text-xs": !isRoot })}>
            {isRoot && `${index + 1}.`}
            {" "}
            {title}
          </h2>
          <p className={cn(" text-xs  mb-2 text-inherit/50",
          )}
          >
            {description}
          </p>
        </Link>
        {subItems && (
          <ul className="pl-5 list-disc pt-4">
            {subItems?.map(subItem => (
              <SidebarItem {...subItem} key={subItem.title} activeId={activeId} index={index} />
            ))}
          </ul>
        )}
      </li>
    </div>
  );
};
