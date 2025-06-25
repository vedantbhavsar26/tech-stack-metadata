import { TechShowcase } from "@/app/tech/tech-showcase";
import { RepoStats } from "@/components/RepoStats";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeHighlighter } from "@/components/ui/codeHighlighter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { getAllTechMetaData, getTechMetaData } from "@exlaso/tech-stack-metadata";
import { Code, Download, FileCode, Github, Globe, Layout, Package, Settings, Shield, Star, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export default function HomePage() {
  const tech = getAllTechMetaData();
  const ROUNDED_TOTAL_TECH = Math.round(tech.length / 10) * 10; // Round to nearest 10 for display
  const VERSION = "1.0.3";
  const builtWith = [getTechMetaData("REACT_JS"), getTechMetaData("NEXT_JS"), getTechMetaData("TAILWIND_CSS"), getTechMetaData("TYPESCRIPT"), getTechMetaData("FRAMER_MOTION")];

  return (
    <div
      className="min-h-screen bg-gradient-to-br  px-4  md:px-0 from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent"
          />
          <div className="grid grid-cols-6 h-full w-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border-r border-t border-slate-700/20 h-[25%]"></div>
            ))}
          </div>
        </div>

        <div className="container relative z-10 mx-auto  text-center">
          <Badge
            variant="outline"
            className="mb-6  py-1 text-sm font-medium border-blue-200 dark:border-blue-800 bg-blue-100/50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300"
          >
            v
            {VERSION}
            {" "}
            — Now
            {" "}
            {ROUNDED_TOTAL_TECH}
            + technologies
          </Badge>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
              Reusable Tech Stack
              {" "}
              <span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Metadata
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              A comprehensive, categorized metadata structure for tech stacks with React Icons integration
              —
              the perfect foundation for developer portfolios, dashboards, and project showcases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg h-14"
                asChild
              >
                <Link href="/docs/introduction">
                  <Download className="h-5 w-5 mr-2" />
                  Get Started
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="h-14 text-lg" asChild>
                <Link
                  href="https://github.com/vedantbhavsar26/tech-stack-metadata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Star on GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Preview */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl transform rotate-1"
            >
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl transform -rotate-1"
            >
            </div>
            <div
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div
                className="p-1 bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 flex items-center gap-1"
              >
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-slate-500">Tech Stack Showcase</div>
              </div>
              <div className="min-h-[400px] overflow-y-auto p-2">
                <div className="md:hidden  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 p-2">
                  {/* Just showing a few example tech icons for preview */}
                  {tech.slice(0, 8).map((techMeta, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      <div
                        className="h-12 w-12 rounded-md bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center "
                      >
                        {techMeta.icon({ className: "h-4 w-4" })}
                      </div>
                      <span className="text-xs font-medium text-center truncate w-full">
                        {techMeta.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="max-md:hidden grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 p-2">
                  {/* Just showing a few example tech icons for preview */}
                  {tech.slice(0, 18).map((techMeta, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      <div
                        className="h-12 w-12 rounded-md bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center "
                      >
                        {techMeta.icon({ className: "h-4 w-4" })}
                      </div>
                      <span className="text-xs font-medium text-center truncate w-full">
                        {techMeta.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container mx-auto mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { count: `${ROUNDED_TOTAL_TECH}+`, label: "Technologies", icon: Package },
              { count: "9", label: "Categories", icon: Layout },
              { count: "100%", label: "TypeScript", icon: FileCode },
              { count: "1KB", label: "Tree-shakable", icon: Terminal },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-center"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">{stat.count}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-blue-200 dark:border-blue-800"
            >
              FEATURES
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Everything You Need for Tech Stack Showcasing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive, well-organized collection of technology metadata designed for modern web
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Categorized Metadata",
                description: "Well-organized technology metadata grouped by categories including frontend, backend, databases, languages, and more.",
                color: "text-blue-600",
              },
              {
                icon: Package,
                title: "Extensive Collection",
                description: "Over 200 popular technologies, frameworks, and tools pre-configured and ready to use in your projects.",
                color: "text-green-600",
              },
              {
                icon: Code,
                title: "React Icons Integration",
                description: "Each technology comes pre-mapped with the appropriate icon from react-icons for perfect visual representation.",
                color: "text-purple-600",
              },
              {
                icon: FileCode,
                title: "TypeScript Support",
                description: "Fully typed with TypeScript for better development experience, autocompletion, and type safety.",
                color: "text-blue-600",
              },
              {
                icon: Terminal,
                title: "Tree-Shakable Imports",
                description: "Import only what you need with tree-shaking support to keep your bundle size small and efficient.",
                color: "text-orange-600",
              },
              {
                icon: Star,
                title: "Extensible Structure",
                description: "Simple structure that allows for easy customization and extension with your own custom tech entries.",
                color: "text-yellow-600",
              },
              {
                icon: Shield,
                title: "Maintained & Updated",
                description: "Regularly updated to include new technologies and maintain compatibility with the latest frameworks.",
                color: "text-red-600",
              },
              {
                icon: Layout,
                title: "Ready-to-Use Components",
                description: "Example components and patterns for displaying tech stacks in your applications with minimal effort.",
                color: "text-indigo-600",
              },
              {
                icon: Globe,
                title: "Universal Compatibility",
                description: "Works with any React-based project including Next.js, Remix, Gatsby, and vanilla React applications.",
                color: "text-teal-600",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="border-slate-200 dark:border-slate-800 overflow-hidden transition-all hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div
                    className={cn("h-12 w-12 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800", feature.color)}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-purple-200 dark:border-purple-800"
            >
              CATEGORIES
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Explore Technology Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive collection of technologies organized by category
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <TechShowcase />
          </div>
        </div>
      </section>

      {/* Installation & Usage */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-blue-200 dark:border-blue-800"
            >
              GETTING STARTED
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Quick Start Guide</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get up and running in minutes with our simple installation and usage guide
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="installation" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="installation" className="text-base">Installation</TabsTrigger>
                <TabsTrigger value="basic-usage" className="text-base">Basic Usage</TabsTrigger>
                <TabsTrigger value="advanced-usage" className="text-base">Advanced Usage</TabsTrigger>
              </TabsList>

              <TabsContent value="installation" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5" />
                      <span>Installation</span>
                    </CardTitle>
                    <CardDescription>
                      Install the package using your preferred package
                      manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <CodeHighlighter lang="bash" code="npm install @exlaso/tech-stack-metadata" />
                      <CodeHighlighter lang="bash" code="pnpm add @exlaso/tech-stack-metadata" />
                      <CodeHighlighter lang="bash" code="yarn add @exlaso/tech-stack-metadata" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="basic-usage" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-5 w-5" />
                      <span>Basic Usage</span>
                    </CardTitle>
                    <CardDescription>
                      Import and use tech stack metadata in your
                      components
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeHighlighter
                      lang="tsx"
                      code={`import { techMetaData } from "@exlaso/tech-stack-metadata";
import { frontend, backend } from "@exlaso/tech-stack-metadata";

// Access all tech metadata
console.log(techMetaData.all);

// Access specific categories
console.log(techMetaData.frontend);
console.log(techMetaData.backend);

// Or use direct imports
console.log(frontend);
console.log(backend);`}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advanced-usage" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Terminal className="h-5 w-5" />
                      <span>Advanced Usage</span>
                    </CardTitle>
                    <CardDescription>
                      Use utility functions to search and filter tech
                      metadata
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeHighlighter
                      lang="tsx"
                      code={`import { 
  getAllTechMetadata, 
  getTechMetadata, 
  getTechMetadataByCategory,
  searchTechMetadata 
} from "@exlaso/tech-stack-metadata";

// Get all tech metadata as an array
const allTech = getAllTechMetadata();

// Get tech metadata for a specific key
const reactMetadata = getTechMetadata("REACT_JS");

// Get all tech items for a specific category
const frontendTech = getTechMetadataByCategory("frontend");

// Search tech metadata by name
const searchResults = searchTechMetadata("react");`}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Example usage section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-green-200 dark:border-green-800"
            >
              EXAMPLES
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Display Tech Stacks in Your Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create beautiful tech stack displays for your portfolio, resume, or project documentation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">Component Example</h3>
              <p className="text-muted-foreground mb-6">
                Create reusable components to display tech stacks in your applications.
              </p>
              <Card className="mb-6">
                <CardContent className="pt-6 overflow-x-scroll">
                  <CodeHighlighter
                    lang="tsx"
                    code={`import React from "react";
import { frontend, backend, databases } from "@exlaso/tech-stack-metadata";

export function ProjectTechStack({ projectId }) {
  // Example project tech stacks
  const projects = {
    portfolio: ["REACT_JS", "NEXT_JS", "TAILWIND_CSS", "TYPESCRIPT"],
    dashboard: ["NODE_JS", "MONGODB"],
    // ...more projects
  };
  
  // Get tech keys for the project
  const techKeys = projects[projectId] || [];
  
  // Get full tech metadata for each key
  const techStack = techKeys.map(key => {
    // Search in each category
    return getTechMetaData(key)
  }).filter(Boolean);
  
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map(tech => (
        <div key={tech.key} className="flex items-center gap-2 p-2 bg-gray-100 rounded">
          <tech.icon size={20} />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}`}
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Visual Example</h3>
              <p className="text-muted-foreground mb-6">
                Example of how tech stacks appear in your portfolio or documentation.
              </p>

              <Card className="border-slate-200 dark:border-slate-700 overflow-hidden">
                <CardHeader className="pb-2 border-b">
                  <CardTitle>Project: Personal Portfolio</CardTitle>
                  <CardDescription>A showcase of my work and skills</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">BUILT WITH</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {builtWith.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 py-1.5 px-3 bg-slate-100 dark:bg-slate-800 rounded-full"
                      >
                        <span className="text-lg">{tech?.icon({})}</span>
                        <span className="text-sm font-medium">{tech?.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                      DEPLOYED
                      ON
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-black rounded-full">
                        <div className="w-4 h-4 text-white">{getTechMetaData("VERCEL")?.icon({})}</div>
                      </div>
                      <span className="font-medium">Vercel</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-orange-200 dark:border-orange-800"
            >
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about using tech stack metadata in your projects
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What is tech stack metadata?",
                  answer: "Tech stack metadata is a structured way to represent technologies used in software development, including their names, icons, categories, and other properties. It helps create consistent and visually appealing representations of technology stacks in portfolios, documentation, and dashboards.",
                },
                {
                  question: "How does it integrate with React Icons?",
                  answer: "Each technology in our metadata includes a pre-mapped icon from the react-icons library. This allows you to easily render visual representations of technologies without having to manually map icons yourself.",
                },
                {
                  question: "Can I add my own custom technologies?",
                  answer: "Yes! The library is designed to be easily extensible. You can create your own custom tech entries following the same structure and incorporate them with the existing metadata.",
                },
                {
                  question: "Is it optimized for bundle size?",
                  answer: "Absolutely. The package supports tree-shaking, meaning you can import only the specific categories or utilities you need without including the entire library in your bundle.",
                },
                {
                  question: "How often is it updated with new technologies?",
                  answer: "We regularly update the library to include new technologies and frameworks as they gain popularity, typically with monthly updates to keep the collection current.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1 text-sm font-medium border-white/30 text-white"
            >
              READY TO USE
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Start Building Beautiful Tech Showcases
              Today
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join hundreds of developers who use our tech stack metadata for their portfolios,
              documentation sites, and project showcases.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg h-14 font-medium"
                asChild
              >
                <Link href="/docs/introduction">
                  <Book className="h-5 w-5 mr-2" />
                  Read Documentation
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 text-lg h-14 font-medium"
                variant="outline"
                asChild
              >
                <Link href="https://github.com/vedantbhavsar26/tech-stack-metadata" target="_blank">
                  <Github className="h-5 w-5 mr-2" />
                  Star on GitHub
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            <RepoStats />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div
                  className=" rounded-md  flex items-center justify-center"
                >
                  <Image src="/icon.png" alt="tech-stack-metadata logo" width={50} height={50} className="rounded-2xl" />
                </div>
                <span className="font-bold text-lg">tech-stack-metadata</span>
              </div>
              <p className="text-muted-foreground">
                A comprehensive, categorized metadata structure for tech stacks with React Icons
                integration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs/introduction"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/usage"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="/docs/usage#tech-metadata" className="text-muted-foreground hover:text-foreground">
                    Tech
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/contributing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contributing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/vedantbhavsar26/tech-stack-metadata"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/vedantbhavsar26"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div> */}
            {/*  <h3 className="font-semibold mb-4">Legal</h3> */}
            {/*  <ul className="space-y-2"> */}
            {/*    <li> */}
            {/*      <Link href="/privacy" className="text-muted-foreground hover:text-foreground"> */}
            {/*        Privacy */}
            {/*        Policy */}
            {/*      </Link> */}
            {/*    </li> */}
            {/*    <li> */}
            {/*      <Link href="/terms" className="text-muted-foreground hover:text-foreground"> */}
            {/*        Terms of */}
            {/*        Service */}
            {/*      </Link> */}
            {/*    </li> */}
            {/*    <li> */}
            {/*      <Link href="/license" className="text-muted-foreground hover:text-foreground"> */}
            {/*        MIT */}
            {/*        License */}
            {/*      </Link> */}
            {/*    </li> */}
            {/*  </ul> */}
            {/* </div> */}
          </div>

          <div
            className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              ©
              {" "}
              {new Date().getFullYear()}
              {" "}
              tech-stack-metadata. Built with ❤️ for developers.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/vedantbhavsar26/tech-stack-metadata"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/vedantbhavsar26"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.npmjs.com/package/@exlaso/tech-stack-metadata"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">NPM</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Additional icons
function Book(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );
}

function Twitter(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      >
      </path>
    </svg>
  );
}
