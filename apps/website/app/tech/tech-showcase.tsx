"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Package, Code, Server, Database, Cloud, Layers } from "lucide-react"
import { AddTechModal } from "./add-tech-modal"

// Mock data structure based on the tech-stack-metadata package
interface TechItem {
  name: string
  icon: string
  description?: string
}

interface TechCategory {
  label: string
  icon: React.ReactNode
  items: TechItem[]
}

// Mock data for demonstration
const mockTechCategories: TechCategory[] = [
  {
    label: "Frontend",
    icon: <Code className="h-5 w-5" />,
    items: [
      { name: "React", icon: "⚛️", description: "A JavaScript library for building user interfaces" },
      { name: "Vue", icon: "🟢", description: "Progressive JavaScript Framework" },
      { name: "Angular", icon: "🅰️", description: "Platform for building mobile and desktop web applications" },
      { name: "Next.js", icon: "▲", description: "The React Framework for the Web" },
      { name: "Svelte", icon: "🔶", description: "Cybernetically enhanced web apps" },
      { name: "Tailwind CSS", icon: "🌊", description: "A utility-first CSS framework" },
    ],
  },
  {
    label: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      { name: "Node.js", icon: "🟩", description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
      { name: "Express", icon: "🚂", description: "Fast, unopinionated, minimalist web framework for Node.js" },
      { name: "Django", icon: "🐍", description: "The web framework for perfectionists with deadlines" },
      { name: "Ruby on Rails", icon: "🛤️", description: "Web application framework for Ruby" },
      { name: "Spring Boot", icon: "☕", description: "Java-based framework for building web applications" },
    ],
  },
  {
    label: "Database",
    icon: <Database className="h-5 w-5" />,
    items: [
      { name: "MongoDB", icon: "🍃", description: "Document-oriented NoSQL database" },
      { name: "PostgreSQL", icon: "🐘", description: "Advanced open source relational database" },
      { name: "MySQL", icon: "🐬", description: "Open-source relational database management system" },
      { name: "Redis", icon: "🔴", description: "In-memory data structure store" },
      { name: "Firebase", icon: "🔥", description: "Platform for mobile and web applications" },
    ],
  },
  {
    label: "DevOps",
    icon: <Cloud className="h-5 w-5" />,
    items: [
      { name: "Docker", icon: "🐳", description: "Platform for developing, shipping, and running applications" },
      { name: "Kubernetes", icon: "☸️", description: "Container orchestration system" },
      { name: "AWS", icon: "☁️", description: "Cloud computing services" },
      { name: "GitHub Actions", icon: "🔄", description: "CI/CD platform" },
      { name: "Terraform", icon: "🏗️", description: "Infrastructure as code software tool" },
    ],
  },
  {
    label: "Tools",
    icon: <Layers className="h-5 w-5" />,
    items: [
      { name: "Git", icon: "🔀", description: "Distributed version control system" },
      { name: "VS Code", icon: "📝", description: "Code editor redefined" },
      { name: "Webpack", icon: "📦", description: "Static module bundler" },
      { name: "Jest", icon: "🃏", description: "JavaScript testing framework" },
      { name: "Figma", icon: "🎨", description: "Collaborative interface design tool" },
    ],
  },
]

export function TechShowcase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredCategories, setFilteredCategories] = useState<TechCategory[]>(mockTechCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  // Filter tech items based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCategories(mockTechCategories)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = mockTechCategories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            (item.description && item.description.toLowerCase().includes(query)),
        ),
      }))
      .filter((category) => category.items.length > 0)

    setFilteredCategories(filtered)
  }, [searchQuery])

  // Get all tech items across all categories
  const allTechItems = mockTechCategories.flatMap((category) =>
    category.items.map((item) => ({ ...item, category: category.label })),
  )

  // Filter all tech items based on search query
  const filteredAllTechItems = allTechItems.filter(
    (item) =>
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Check if search has no results
  const hasNoResults = filteredCategories.length === 0 || (activeTab === "all" && filteredAllTechItems.length === 0)

  return (
    <>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Tech
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 flex flex-wrap">
          <TabsTrigger value="all" className="flex items-center">
            <Package className="h-4 w-4 mr-2" />
            All
          </TabsTrigger>
          {mockTechCategories.map((category) => (
            <TabsTrigger key={category.label} value={category.label} className="flex items-center">
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {hasNoResults ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No technologies found matching your search.</p>
              <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add New Tech
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredAllTechItems.map((item, index) => (
                <Card key={`${item.name}-${index}`} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <Badge variant="outline" className="mt-1">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    {item.description && <p className="text-sm text-muted-foreground mt-3">{item.description}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {mockTechCategories.map((category) => (
          <TabsContent key={category.label} value={category.label} className="space-y-6">
            {filteredCategories.find((c) => c.label === category.label)?.items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No technologies found in this category matching your search.
                </p>
                <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Tech
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCategories
                  .find((c) => c.label === category.label)
                  ?.items.map((item, index) => (
                    <Card key={`${item.name}-${index}`} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 h-10 w-10 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                          </div>
                        </div>
                        {item.description && <p className="text-sm text-muted-foreground mt-3">{item.description}</p>}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <AddTechModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={mockTechCategories.map((c) => c.label)}
      />
    </>
  )
}
