import type { IconType } from "react-icons";

export type TechCategory = "language" | "framework" | "library" | "tool" | "database" | "platform" | "security" | "design" | "backend" | "frontend" | "devops" | "auth" | "documentation";

export type TechMeta = {
  key: string; // Unique key
  name: string;
  url: string;
  icon: IconType;
  category: TechCategory[];
  aliases: string[]; // Optional keywords or alternate names
};
