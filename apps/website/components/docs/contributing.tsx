import { Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Code, Github, GitPullRequest, ShieldCheck } from "lucide-react";
import React from "react";

export function Contributing() {
  return (
    <Section id="contributing">
      <h2 className="text-3xl font-bold mb-6">Contributing</h2>
      <p className="text-muted-foreground mb-6">
        We welcome contributions from the community! Here's how you can help improve the tech stack metadata project.
      </p>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Development Setup
            </CardTitle>
            <CardDescription>Getting your local environment ready</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Fork the repository on GitHub</li>
              <li>
                Clone your fork:
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">git clone https://github.com/yourusername/tech-stack-metadata.git</code>
              </li>
              <li>
                Install dependencies:
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">pnpm install</code>
              </li>
              <li>
                Create a branch:
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">git checkout -b feature/your-feature</code>
              </li>
              <li>
                Run the development server:
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">pnpm dev</code>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitPullRequest className="h-5 w-5" />
              Pull Request Process
            </CardTitle>
            <CardDescription>How to submit your changes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal pl-4 space-y-2">
              <li>
                Make your changes and commit them:
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">git commit -m "Description of changes"</code>
              </li>
              <li>
                Push to the branch:
                <code className="bg-slate-100 dark:bg-slate-800 px-1 rounded">git push origin feature/your-feature</code>
              </li>
              <li>Open a pull request in GitHub</li>
              <li>Ensure your PR description clearly describes the changes</li>
              <li>Include any relevant issue numbers in your PR description</li>
              <li>Wait for review and address any feedback</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Guidelines
            </CardTitle>
            <CardDescription>Standards for code contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Follow the existing code style and formatting</li>
              <li>Write tests for new functionality</li>
              <li>Update documentation for any changes to APIs or features</li>
              <li>Keep pull requests focused on a single change</li>
              <li>Ensure your code passes all CI checks before requesting review</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Code of Conduct
            </CardTitle>
            <CardDescription>Community standards and respectful collaboration</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Be respectful and inclusive in all interactions</li>
              <li>Report unacceptable behavior to the maintainers</li>
              <li>
                See the
                <a href="https://github.com/vedantbhavsar26/tech-stack-metadata/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Code of Conduct</a>
                {" "}
                for details
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6">
          <a
            href="https://github.com/vedantbhavsar26/tech-stack-metadata/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Github className="h-4 w-4" />
            View full contributing guidelines on GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
