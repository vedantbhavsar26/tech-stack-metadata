import type { CategoryKey } from "@/src/data/categories";
import type { IconType } from "react-icons";

export type TechMetaData = {
  key: string; // Unique key
  name: string;
  url: string;
  icon: IconType;
  category: CategoryKey[];
  aliases: string[]; // Optional keywords or alternate names
};
