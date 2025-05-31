import { Section } from "@/components/section";
import { CodeHighlighter } from "@/components/ui/codeHighlighter";
import type { FunctionComponent } from "react";
import React from "react";

export const Introduction: FunctionComponent = () => {
  // if #introduction crossed the top 80% viewport then update the URL hash

  return (
    <Section id="introduction">
      <h1 className="text-4xl font-bold mb-6">Introduction</h1>
      <div className="prose prose-lg">
        <p className="text-xl leading-relaxed mb-6">
          <code>@exlaso/tech-stack-metadata</code>
          {" "}
          provides a standardized, production-ready way to define, document,
          and showcase technology stacks used in software projects with integrated React icons.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Tech Stack Metadata?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Maintain a structured repository of technologies you use or have expertise in</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Display beautiful, categorized tech stacks on portfolios and resumes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Leverage pre-mapped React icons for visual representation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Full TypeScript support with intuitive interfaces</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Ready for production use in modern React and Next.js applications</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Core Concepts</h2>
        <p className="mb-4">
          Tech stack metadata is organized into
          {" "}
          <strong>categories</strong>
          {" "}
          (like Frontend, Backend)
          that contain
          <strong>tech items</strong>
          {" "}
          with names, icons, and optional URLs.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-md mb-6 overflow-auto">
          <CodeHighlighter
            code={`// Example tech item structure
{
  name: "React",
  icon: FaReact, // from react-icons
  url: "https://reactjs.org"
}`}
            lang="ts"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Ideal Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Portfolio Websites</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Showcase your technical expertise with categorized,
              visually appealing tech stacks
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Project Documentation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Document technologies used in projects with
              consistent formatting
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Developer Dashboards</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build internal tools to track and visualize
              technology adoption
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Resume Builders</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate consistent skills sections with visual
              representations
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Production-Ready</h2>
        <ul className="mb-6 list-disc pl-6">
          <li>Actively maintained and tested for compatibility with modern React/Next.js projects.</li>
          <li>Tree-shakable and lightweight for fast load times.</li>
          <li>Extensible for custom tech stacks and categories.</li>
        </ul>

        <p className="text-lg font-medium">
          Ready to get started? Continue to the
          {" "}
          <a
            href="/docs#installation"
            className="text-primary hover:underline"
          >
            Installation
          </a>
          {" "}
          section.
        </p>
      </div>
    </Section>
  );
};
