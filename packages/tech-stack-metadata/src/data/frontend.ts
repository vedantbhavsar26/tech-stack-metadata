import type { TechMetaData } from "@/types/techTypes";
import { BiLogoJquery, BiLogoTailwindCss, BiLogoVuejs } from "react-icons/bi";
import {
  SiAngular,
  SiBootstrap,
  SiChakraui,
  SiFramer,
  SiGreensock,
  SiNextdotjs,
  SiReact,
  SiRemix,
  SiShadcnui,
  SiSvelte,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const frontend = {
  REACT_JS: {
    key: "react_js",
    name: "React",
    url: "https://reactjs.org/",
    icon: SiReact,
    category: ["framework", "library", "frontend"],
    aliases: ["React.js", "ReactJS"],
  },
  REACT_NATIVE: {
    key: "react_native",
    name: "React Native",
    url: "https://reactnative.dev/",
    icon: TbBrandReactNative,
    category: ["framework", "frontend", "platform"],
    aliases: ["RN", "Mobile Development"],
  },
  NEXT_JS: {
    key: "next_js",
    name: "Next.js",
    url: "https://nextjs.org/",
    icon: SiNextdotjs,
    category: ["framework", "frontend", "backend"],
    aliases: ["NextJS", "Next", "React Framework"],
  },
  TAILWIND_CSS: {
    key: "tailwind_css",
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
    icon: BiLogoTailwindCss,
    category: ["library", "frontend", "design"],
    aliases: ["Tailwind", "TailwindCSS", "Utility CSS"],
  },
  BOOTSTRAP: {
    key: "bootstrap",
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
    icon: SiBootstrap,
    category: ["library", "frontend", "design"],
    aliases: ["BS", "Twitter Bootstrap"],
  },
  JQUERY: {
    key: "jquery",
    name: "jQuery",
    url: "https://jquery.com/",
    icon: BiLogoJquery,
    category: ["library", "frontend"],
    aliases: ["JS Library"],
  },
  THREE_JS: {
    key: "three_js",
    name: "Three.js",
    url: "https://threejs.org/",
    icon: SiThreedotjs,
    category: ["library", "frontend"],
    aliases: ["3D Graphics", "WebGL"],
  },
  GSAP: {
    key: "gsap",
    name: "GSAP",
    url: "https://greensock.com/gsap/",
    icon: SiGreensock,
    category: ["library", "frontend", "design"],
    aliases: ["GreenSock", "Animation Platform"],
  },
  SHAD_CN: {
    key: "shad_cn",
    name: "shadcn/ui",
    url: "https://ui.shadcn.com/",
    icon: SiShadcnui,
    category: ["library", "frontend", "design"],
    aliases: ["Shadcn UI", "UI Components"],
  },
  VITE: {
    key: "vite",
    name: "Vite",
    url: "https://vitejs.dev/",
    icon: SiVite,
    category: ["tool", "frontend"],
    aliases: ["Vite.js", "Build Tool"],
  },
  VUE_JS: {
    key: "vue_js",
    name: "Vue.js",
    url: "https://vuejs.org/",
    icon: BiLogoVuejs,
    category: ["framework", "frontend"],
    aliases: ["Vue", "Progressive JavaScript Framework"],
  },
  ANGULAR: {
    key: "angular",
    name: "Angular",
    url: "https://angular.io/",
    icon: SiAngular,
    category: ["framework", "frontend"],
    aliases: ["Angular Framework", "TypeScript Framework"],
  },
  SVELTE: {
    key: "svelte",
    name: "Svelte",
    url: "https://svelte.dev/",
    icon: SiSvelte,
    category: ["framework", "frontend"],
    aliases: ["Svelte Framework", "Compiler-based Framework"],
  },
  REMIX: {
    key: "remix",
    name: "Remix",
    url: "https://remix.run/",
    icon: SiRemix,
    category: ["framework", "frontend"],
    aliases: ["Remix Framework", "React Router Framework"],
  },
  CHAKRA_UI: {
    key: "chakra_ui",
    name: "Chakra UI",
    url: "https://chakra-ui.com/",
    icon: SiChakraui,
    category: ["library", "frontend", "design"],
    aliases: ["Chakra", "Component Library"],
  },
  FRAMER_MOTION: {
    key: "framer_motion",
    name: "Framer Motion",
    url: "https://www.framer.com/motion/",
    icon: SiFramer, // Using GSAP icon as placeholder
    category: ["library", "frontend"],
    aliases: ["Motion Library", "Animation Framework"],
  },

} satisfies Record<string, TechMetaData>;
