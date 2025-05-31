import { techMetaData } from "@/src/data";
import type { TechMetaData } from "@/types/techTypes";

export function searchTechMetadata(query: string): TechMetaData[] {
  const searchTerm = query.toLowerCase().trim();

  return Object.values(techMetaData.all).filter(tech =>
    tech.name.toLowerCase().includes(searchTerm)
    || tech.key.toLowerCase().includes(searchTerm)
    || tech.aliases?.some(alias => alias.toLowerCase().includes(searchTerm)),
  );
}
