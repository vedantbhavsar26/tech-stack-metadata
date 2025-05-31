import { Section } from "@/components/section";
import { Shiki } from "@/components/ui/shiki";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FunctionComponent } from "react";
import React from "react";

export const Installation: FunctionComponent = () => {
  return (
    <Section id="installation">
      <h1 className="text-4xl font-bold mb-6">Installation</h1>
      <div className="prose prose-lg">
        <p className="text-xl leading-relaxed mb-6">
          Installing
          {" "}
          <code>@exlaso/tech-stack-metadata</code>
          {" "}
          is straightforward with your preferred package
          manager. This package is production-ready and works seamlessly with React and Next.js.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-md mb-8 overflow-auto">
          <Tabs className="flex mb-2 gap-8" defaultValue="npm">
            <TabsList className="tabs flex gap-2">
              <TabsTrigger value="npm" className="px-3 py-1 bg-primary/10 rounded-md font-medium">npm</TabsTrigger>
              <TabsTrigger value="pnpm" className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">pnpm</TabsTrigger>
              <TabsTrigger value="yarn" className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">yarn</TabsTrigger>
            </TabsList>
            <TabsContent value="npm">
              <Shiki code="npm install @exlaso/tech-stack-metadata" lang="bash" />
            </TabsContent>
            <TabsContent value="pnpm">
              <Shiki code="pnpm install @exlaso/tech-stack-metadata" lang="bash" />
            </TabsContent>
            <TabsContent value="yarn">
              <Shiki code="yarn add @exlaso/tech-stack-metadata" lang="bash" />
            </TabsContent>
          </Tabs>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">→</span>
            <span>React project setup (v16.8 or higher recommended)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">→</span>
            <span>
              <code>react-icons</code>
              {" "}
              is included as a dependency
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">→</span>
            <span>TypeScript is recommended for best developer experience</span>
          </li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="text-lg font-medium text-amber-800">Note</h3>
          <p className="text-amber-700">
            This package is optimized for TypeScript projects but works with JavaScript as well.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Verifying Installation</h2>
        <p className="mb-6">
          After installation, you can verify it's working correctly by importing it in your project:
        </p>
        <Shiki
          code={`import { techCategories } from "@exlaso/tech-stack-metadata";

// Log available tech categories
console.log(techCategories.map(category => category.label));`}
          lang="ts"
        />

        <h2 className="text-2xl font-semibold mb-4">Package Size</h2>
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="font-medium">Minified Size:</span>
            <span>~40KB</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="font-medium">Gzipped Size:</span>
            <span>~12KB</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <p className="mb-2">
          Now that you've installed the package, you're ready to start using it in your project:
        </p>
        <ul className="space-y-1 mb-6">
          <li>
            <a href="/docs#usage" className="text-primary hover:underline">→ Learn about basic usage patterns</a>
          </li>
          <li>
            <a href="/docs#tech-metadata" className="text-primary hover:underline">→ Explore the tech metadata structure</a>
          </li>
        </ul>

        <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <a href="/docs#introduction" className="text-primary hover:underline flex items-center gap-1">
            <span>←</span>
            {" "}
            Introduction
          </a>
          <a href="/docs#usage" className="text-primary hover:underline flex items-center gap-1">
            Usage
            {" "}
            <span>→</span>
          </a>
        </div>
      </div>
    </Section>
  );
};
