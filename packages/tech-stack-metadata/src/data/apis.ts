import type { TechMetaData } from "@/types/techTypes";
import { BiLogoGraphql } from "react-icons/bi";
import { SiHasura, SiPrisma, SiSwagger, SiTrpc } from "react-icons/si";

export const apis = {
  GRAPHQL: {
    key: "graphql",
    name: "GraphQL",
    url: "https://graphql.org/",
    icon: BiLogoGraphql,
    category: ["language", "backend", "tool"],
    aliases: ["GQL", "API Query Language"],
  },
  TRPC: {
    key: "trpc",
    name: "tRPC",
    url: "https://trpc.io/",
    icon: SiTrpc,
    category: ["library", "backend", "frontend", "tool"],
    aliases: ["TypeScript RPC", "API Framework"],
  },
  PRISMA: {
    key: "prisma",
    name: "Prisma",
    url: "https://www.prisma.io/",
    icon: SiPrisma,
    category: ["library", "database", "backend", "tool"],
    aliases: ["ORM", "Database Toolkit"],
  },
  HASURA: {
    key: "hasura",
    name: "Hasura",
    url: "https://hasura.io/",
    icon: SiHasura,
    category: ["tool", "backend", "database"],
    aliases: ["GraphQL Engine", "API Platform"],
  },
  SWAGGER: {
    key: "swagger",
    name: "Swagger",
    url: "https://swagger.io/",
    icon: SiSwagger,
    category: ["tool", "backend", "documentation"],
    aliases: ["OpenAPI", "API Documentation"],
  },
} satisfies Record<string, TechMetaData>;
