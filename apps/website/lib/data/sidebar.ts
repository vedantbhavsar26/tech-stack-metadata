import { Contributing } from "@/components/docs/contributing";
import { Installation } from "@/components/docs/installation";
import { Introduction } from "@/components/docs/introduction";
import { Usage } from "@/components/docs/usage";

export type Sidebar = {
  title: string;
  href: string;
  description: string;
  subItems?: Sidebar[];
  component?: React.ComponentType<any>;
};

export const sidebarContent = [
  {
    title: "Introduction",
    href: "/docs/introduction",
    description: "An overview of the tech stack metadata structure and its purpose.",
    component: Introduction,

  },
  {
    title: "Installation",
    href: "/docs/installation",
    description: "How to install the tech stack metadata package in your project.",
    component: Installation,
  },
  {
    title: "Usage",
    href: "/docs/usage",
    description: "Examples of how to use the tech stack metadata in your code.",
    component: Usage,
    subItems: [
      {
        title: "Tech Metadata",
        href: "/docs/usage#tech-metadata",
        description: "Details on the tech metadata structure and how to define it.",
      },
      {
        title: "APIs",
        href: "/docs/usage#apis",
        description: "Information on the APIs available for interacting with the tech stack metadata.",
      },
    ],
  },
  {
    title: "Contributing",
    href: "/docs/contributing",
    description: "Guidelines for contributing to the tech stack metadata project.",
    component: Contributing,
  },
] satisfies Sidebar[];
