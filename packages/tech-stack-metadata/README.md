# @exlaso/tech-stack-metadata

A reusable and categorized metadata structure for tech stacks, including React Icons — perfect for portfolios, developer dashboards, and resume sites.

---

## 🚀 Features

- Categorized technology metadata
- Includes popular tools and frameworks across stacks
- Pre-mapped with `react-icons` for UI rendering
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

```tsx
import { techCategories } from "@exlaso/tech-stack-metadata";

techCategories.forEach((category) => {
  console.log(category.label); // e.g., 'Frontend', 'Backend'
  category.items.forEach((item) => {
    console.log(item.name); // e.g., 'React'
    console.log(item.icon); // React component from react-icons
  });
});
```

---

## 📁 Structure

Each tech item includes:

```ts
type TechItem = {
  name: string;
  icon: IconType; // from react-icons
  url?: string; // optional
};
```

Each category includes:

```ts
type TechCategory = {
  label: string;
  items: TechItem[];
};
```

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
