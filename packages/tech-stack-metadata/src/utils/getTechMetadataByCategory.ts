import { techMetaData } from "@/src/data";
import type { CategoryKey } from "@/src/data/categories";
import type { TechMetaData } from "@/types/techTypes";

export function getTechMetadataByCategory(category: CategoryKey, onlyFirst: boolean = false): TechMetaData[] {
  if (onlyFirst)
    return Object.values(techMetaData.all).filter(tech => tech.category[0] === category);

  return Object.values(techMetaData.all).filter(tech =>
    tech.category.find(prev => prev === category),
  );
}
