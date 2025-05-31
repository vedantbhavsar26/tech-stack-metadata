import type { TechMetaData } from "@/types/techTypes";
import { RiSupabaseFill } from "react-icons/ri";
import { SiAuth0, SiClerk, SiFirebase, SiKeycloak } from "react-icons/si";
import { TbBrandOauth, TbEPassport } from "react-icons/tb";

export const auth = {
  CLERK: {
    key: "clerk",
    name: "Clerk",
    url: "https://clerk.dev/",
    icon: SiClerk,
    category: ["auth", "tool", "backend", "frontend"],
    aliases: ["Authentication", "User Management"],
  },
  NEXT_AUTH: {
    key: "next_auth",
    name: "NextAuth.js",
    url: "https://next-auth.js.org/",
    icon: SiAuth0,
    category: ["auth", "library", "backend"],
    aliases: ["NextAuth", "Authentication for Next.js"],
  },
  SUPABASE: {
    key: "supabase",
    name: "Supabase",
    url: "https://supabase.io/",
    icon: RiSupabaseFill,
    category: ["database", "backend", "auth", "platform"],
    aliases: ["Open Source Firebase Alternative", "BaaS"],
  },
  FIREBASE: {
    key: "firebase",
    name: "Firebase",
    url: "https://firebase.google.com/",
    icon: SiFirebase,
    category: ["database", "backend", "auth", "platform"],
    aliases: ["Google Firebase", "BaaS", "Cloud Services"],
  },
  AUTH0: {
    key: "auth0",
    name: "Auth0",
    url: "https://auth0.com/",
    icon: SiAuth0,
    category: ["auth", "platform", "backend"],
    aliases: ["Authentication Platform", "Identity Management"],
  },
  PASSPORT_JS: {
    key: "passport_js",
    name: "Passport.js",
    url: "http://www.passportjs.org/",
    icon: TbEPassport,
    category: ["auth", "library", "backend"],
    aliases: ["Node.js Authentication", "Authentication Middleware"],
  },
  KEYCLOAK: {
    key: "keycloak",
    name: "Keycloak",
    url: "https://www.keycloak.org/",
    icon: SiKeycloak,
    category: ["auth", "platform", "backend"],
    aliases: ["Open Source IAM", "Identity and Access Management"],
  },
  OAUTH2: {
    key: "oauth2",
    name: "OAuth 2.0",
    url: "https://oauth.net/2/",
    icon: TbBrandOauth,
    category: ["auth", "backend"],
    aliases: ["Authorization Framework", "Authentication Protocol"],
  },
} satisfies Record<string, TechMetaData>;
