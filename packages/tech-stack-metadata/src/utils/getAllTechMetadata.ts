import { techMetaData } from "@/src/data";
import type { TechMetaData } from "@/types/techTypes";

export function getAllTechMetaData(): TechMetaData[] {
  return Object.values(techMetaData.all);
}
