import { TechShowcase } from "@/app/tech/tech-showcase";
import { Section } from "@/components/section";
import { CodeHighlighter } from "@/components/ui/codeHighlighter";
import React from "react";

export function Usage() {
  return (
    <Section id="usage">
      <h1 className="text-4xl font-bold mb-6">Usage</h1>
      <div className="prose prose-lg">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p>
          Import the
          {" "}
          <code>techMetaData</code>
          {" "}
          object to access all categorized tech metadata, or import
          categories and utilities directly as needed.
        </p>
        <CodeHighlighter
          lang="ts"
          code={`import { techMetaData } from "@exlaso/tech-stack-metadata";

// Access all categories
console.log(techMetaData.frontend);
console.log(techMetaData.languages);

// Access all tech metadata as a flat object
console.log(techMetaData.all);
`}
          className="mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4">Importing Categories Directly</h2>
        <CodeHighlighter
          lang="ts"
          code={`import { frontend, backend, databases } from "@exlaso/tech-stack-metadata";

// Use a specific category
console.log(frontend);
`}
          className="mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4">Utility Functions</h2>
        <p>
          The following utility functions are available for searching and filtering tech metadata:
        </p>
        <CodeHighlighter
          lang="ts"
          code={`import {
  getAllTechMetadata,
  getTechMetadata,
  getTechMetadataByCategory,
  searchTechMetadata
} from "@exlaso/tech-stack-metadata";

// Get all tech metadata as an array
const allTech = getAllTechMetadata();

// Get metadata for a specific key
const reactMeta = getTechMetadata("react");

// Get all tech for a category
const frontendTech = getTechMetadataByCategory("frontend");

// Search tech by name
const results = searchTechMetadata("React");
`}
          className="mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4">Types</h2>
        <p>
          All metadata is fully typed. You can import types for strict TypeScript support:
        </p>
        <CodeHighlighter
          lang="ts"
          code={`import type { TechMetaData, TechMetaDataKey } from "@exlaso/tech-stack-metadata";
import { IconType } from "@exlaso/tech-stack-metadata";
`}
          className="mb-6"
        />

        <Section id="tech-metadata">

          <h2 className="text-2xl font-semibold mb-4">Tech Metadata</h2>
          <p>
            Each technology entry contains a name, icon, and optional URL. You can use this metadata to render beautiful tech stacks in your UI.
          </p>
          <TechShowcase />
          <br />
          <br />
        </Section>
        <Section id="apis">
          <h2 className="text-2xl font-semibold mb-4" id="apis">API Reference</h2>
          <ul className="mb-6 grid gap-4">
            <li>
              <code className="font-bold">techMetaData</code>
              :
              <span>
                All categories and a flat
                <code className="font-bold">all</code>
                {" "}
                object
              </span>
            </li>
            <li>
              <code className="font-bold">frontend, backend, databases, languages, apis, auth, devops, security, tools</code>
              :
              <span>Individual category exports</span>
            </li>
            <li>
              <code className="font-bold">getAllTechMetadata()</code>
              :
              <span>Returns all tech metadata as an array</span>
            </li>
            <li>
              <code className="font-bold">getTechMetadata(key: TechMetaDataKey)</code>
              :
              <span>Returns metadata for a specific key</span>
            </li>
            <li>
              <code className="font-bold">getTechMetadataByCategory(category: string)</code>
              :
              <span>Returns all tech for a category</span>
            </li>
            <li>
              <code className="font-bold">searchTechMetadata(query: string)</code>
              :
              <span>Searches tech metadata by name</span>
            </li>
            <li>
              <code className="font-bold">TechMetaData</code>
              :
              <span>Type for a tech metadata object</span>
            </li>
            <li>
              <code className="font-bold">TechMetaDataKey</code>
              :
              <span>Type for all valid tech keys</span>
            </li>
            <li>
              <code className="font-bold">IconType</code>
              :
              <span>Type for react-icons</span>
            </li>
          </ul>
        </Section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="mb-6 list-disc pl-6">
          <li>Import only the categories or utilities you need for optimal bundle size.</li>
          <li>Use the provided types for type safety in TypeScript projects.</li>
          <li>
            Leverage
            <code>searchTechMetadata</code>
            {" "}
            for building search/filter UIs.
          </li>
          <li>
            Display icons using the
            <code>icon</code>
            {" "}
            property for consistent visuals.
          </li>
          <li>Keep your tech stack metadata up to date for accurate documentation and portfolio displays.</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <h3 className="text-lg font-medium text-amber-800">Tip</h3>
          <p className="text-amber-700">
            All exports are fully typed and tree-shakable. Import only what you need for optimal bundle size.
          </p>
        </div>
      </div>
    </Section>
  );
}
