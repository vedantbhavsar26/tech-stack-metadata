import { TechShowcase } from "./tech-showcase"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Stack Showcase | tech-stack-metadata",
  description: "Browse and search all available technologies in the tech-stack-metadata package",
}

export default function TechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Tech Stack Explorer</h1>
            <p className="text-xl text-muted-foreground">Browse, search, and add technologies to your stack</p>
          </div>

          <TechShowcase />
        </div>
      </div>
    </div>
  )
}
