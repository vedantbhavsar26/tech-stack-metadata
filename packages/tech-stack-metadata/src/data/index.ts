import { apis } from "@/src/data/apis";
import { auth } from "@/src/data/auth";
import { backend } from "@/src/data/backend";
import { databases } from "@/src/data/database";
import { devops } from "@/src/data/devops";
import { frontend } from "@/src/data/frontend";
import { languages } from "@/src/data/languages";
import { security } from "@/src/data/security";
import { tools } from "@/src/data/tools";
import type { TechMetaData } from "@/types/techTypes";

export * from "./categories";

// Combine all tech data
const all = {
  ...languages,
  ...frontend,
  ...backend,
  ...databases,
  ...apis,
  ...auth,
  ...devops,
  ...security,
  ...tools,
} satisfies Record<string, TechMetaData>;
export type TechMetaDataKey = keyof typeof all;

// Export individual categories for targeted imports
export const techMetaData = {
  languages,
  frontend,
  backend,
  databases,
  apis,
  auth,
  devops,
  security,
  tools,
  all,
};
