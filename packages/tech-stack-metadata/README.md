# @exlaso/tech-stack-metadata

A reusable, categorized, and fully-typed metadata structure for tech stacks, including React Icons. Ideal for portfolios, dashboards, and resume sites.

---

## 🚀 Features

- Categorized technology metadata (languages, frontend, backend, databases, APIs, auth, devops, security, tools)
- Pre-mapped with `react-icons` for UI rendering
- Utility functions for searching and filtering metadata
- Fully typed (TypeScript support)
- Lightweight and easy to extend

---

## 📦 Installation

```bash
npm install @exlaso/tech-stack-metadata
# or
pnpm add @exlaso/tech-stack-metadata
# or
yarn add @exlaso/tech-stack-metadata
```

---

## 🧩 Usage

### Importing Metadata

```ts
import { techMetaData } from "@exlaso/tech-stack-metadata";

// Access all categories
console.log(techMetaData.frontend);
console.log(techMetaData.languages);

// Access all tech metadata as a flat object
console.log(techMetaData.all);
```

### Importing Categories Directly

```ts
import { backend, databases, frontend } from "@exlaso/tech-stack-metadata";
```

### Using Utility Functions

```ts
import { getAllTechMetadata, getTechMetadata, getTechMetadataByCategory, searchTechMetadata } from "@exlaso/tech-stack-metadata";

// Example: Search for a tech by name
const results = searchTechMetadata("React");
```

### Types

```ts
import type { TechMetaData, TechMetaDataKey } from "@exlaso/tech-stack-metadata";
import { IconType } from "@exlaso/tech-stack-metadata";
```

---

## 📁 Structure

Each tech item:

```ts
type TechMetaData = {
  name: string;
  icon: IconType; // from react-icons
  url?: string;
  // ...other fields
};
```

All categories are available as named exports and under `techMetaData`.

---

## 🎯 Ideal For

- Developer portfolio websites
- Dashboards showcasing project stacks
- Resume builders
- Personal websites

---

## 🛠️ Built With

- TypeScript
- react-icons
- tsup

---

## 🧪 Local Development

```bash
pnpm install
pnpm dev     # or pnpm build
```

---

## 📜 License

[MIT](./LICENSE) — Made with ❤️ by [Vedant Bhavsar](https://www.vedantbhavsar.com)
