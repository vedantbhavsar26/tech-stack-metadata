import type { IconType } from "react-icons";
import { FiBook, FiDatabase } from "react-icons/fi";
import { HiCode, HiColorSwatch } from "react-icons/hi";
import { HiCog, HiDocumentText, HiGlobeAlt, HiKey, HiRocketLaunch, HiShieldCheck, HiSparkles } from "react-icons/hi2";
import { TbStack2Filled } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";

export type Category = {
  name: string; // Display name of the category
  description: string; // Brief description of the category
  icon: IconType; // Icon representing the category, can be a string or an icon component
};

export const categories = {
  language: {
    name: "Language",
    description: "Programming languages used for development.",
    icon: HiCode,
  },
  framework: {
    name: "Framework",
    description: "Frameworks that provide structure for applications.",
    icon: TbStack2Filled,
  },
  library: {
    name: "Library",
    description: "Reusable code libraries for various functionalities.",
    icon: FiBook,
  },
  tool: {
    name: "Tool",
    description: "Development tools that assist in the software lifecycle.",
    icon: VscTools,
  },
  database: {
    name: "Database",
    description: "Systems for storing and managing data.",
    icon: FiDatabase,
  },
  platform: {
    name: "Platform",
    description: "Platforms that provide services or environments for applications.",
    icon: HiGlobeAlt,
  },
  security: {
    name: "Security",
    description: "Technologies and practices for securing applications.",
    icon: HiShieldCheck,
  },
  design: {
    name: "Design",
    description: "Tools and practices for designing user interfaces.",
    icon: HiColorSwatch,
  },
  backend: {
    name: "Backend",
    description: "Technologies for server-side development.",
    icon: HiCog,
  },
  frontend: {
    name: "Frontend",
    description: "Technologies for client-side development.",
    icon: HiSparkles,
  },
  devops: {
    name: "DevOps",
    description: "Practices and tools for continuous integration and deployment.",
    icon: HiRocketLaunch,
  },
  auth: {
    name: "Authentication",
    description: "Technologies for user authentication and authorization.",
    icon: HiKey,
  },
  documentation: {
    name: "Documentation",
    description: "Tools and practices for creating and managing documentation.",
    icon: HiDocumentText,
  },
  api: {
    name: "API",
    description: "Technologies for building and consuming APIs.",
    icon: HiGlobeAlt,
  },
};
export function getCategory(key: CategoryKey): Category | undefined {
  return categories[key];
}
export type CategoryKey = keyof typeof categories;
