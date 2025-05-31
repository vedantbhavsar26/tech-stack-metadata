import type { TechMetaData } from "@/types/techTypes";
import { BiLogoNodejs } from "react-icons/bi";
import { SiDjango, SiExpress, SiFastapi, SiFlask, SiGraphql, SiLaravel, SiNestjs, SiSpringboot } from "react-icons/si";

export const backend = {
  NODE_JS: {
    key: "node_js",
    name: "Node.js",
    url: "https://nodejs.org/en/",
    icon: BiLogoNodejs,
    category: ["platform", "backend"],
    aliases: ["NodeJS", "Node", "JavaScript Runtime"],
  },
  EXPRESS: {
    key: "express",
    name: "Express.js",
    url: "https://expressjs.com/",
    icon: SiExpress,
    category: ["framework", "backend"],
    aliases: ["Express", "Node.js Framework"],
  },
  NEST_JS: {
    key: "nest_js",
    name: "NestJS",
    url: "https://nestjs.com/",
    icon: SiNestjs,
    category: ["framework", "backend"],
    aliases: ["Nest", "Node.js Framework"],
  },
  FLASK: {
    key: "flask",
    name: "Flask",
    url: "https://flask.palletsprojects.com/",
    icon: SiFlask,
    category: ["framework", "backend"],
    aliases: ["Python Framework"],
  },
  FASTAPI: {
    key: "fastapi",
    name: "FastAPI",
    url: "https://fastapi.tiangolo.com/",
    icon: SiFastapi,
    category: ["framework", "backend"],
    aliases: ["Fast API", "Python API Framework"],
  },
  DJANGO: {
    key: "django",
    name: "Django",
    url: "https://www.djangoproject.com/",
    icon: SiDjango,
    category: ["framework", "backend"],
    aliases: ["Django Framework", "Python Web Framework"],
  },
  SPRING_BOOT: {
    key: "spring_boot",
    name: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
    icon: SiSpringboot,
    category: ["framework", "backend"],
    aliases: ["Spring", "Java Framework"],
  },
  LARAVEL: {
    key: "laravel",
    name: "Laravel",
    url: "https://laravel.com/",
    icon: SiLaravel,
    category: ["framework", "backend"],
    aliases: ["PHP Framework", "Web Application Framework"],
  },
  GRAPHQL: {
    key: "graphql",
    name: "GraphQL",
    url: "https://graphql.org/",
    icon: SiGraphql,
    category: ["backend", "api"],
    aliases: ["Query Language", "API Query Language"],
  },
} satisfies Record<string, TechMetaData>;
