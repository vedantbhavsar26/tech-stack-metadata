import type { TechMetaDataKey } from "@/src/data";
import { techMetaData } from "@/src/data";
import type { TechMetaData } from "@/types/techTypes";

export function getTechMetaData(key: TechMetaDataKey): TechMetaData | undefined {
  return techMetaData.all[key] || undefined;
}
