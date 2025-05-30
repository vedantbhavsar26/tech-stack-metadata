import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Copy, Download, ExternalLink, Github, Package, Rocket, Settings, Star, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">tech-stack-metadata</h1>
                <p className="text-sm text-muted-foreground">@exlaso/tech-stack-metadata</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>TypeScript</span>
              </Badge>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/vedantbhavsar26/tech-stack-metadata" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              Reusable Tech Stack{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Metadata
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A categorized metadata structure for tech stacks, including React Icons — perfect for portfolios,
              developer dashboards, and resume sites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/vedantbhavsar26/tech-stack-metadata" target="_blank">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to showcase technology stacks in your applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span>Categorized Metadata</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Well-organized technology metadata grouped by categories for easy navigation and display.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-green-600" />
                  <span>Popular Tools Included</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Includes popular tools and frameworks across different technology stacks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-purple-600" />
                  <span>React Icons Ready</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pre-mapped with react-icons for seamless UI rendering in your applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge className="h-5 w-5 text-blue-600" />
                  <span>TypeScript Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fully typed with TypeScript for better development experience and type safety.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span>Lightweight</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Minimal footprint and easy to extend for your specific use cases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  <span>Easy to Extend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simple structure that allows for easy customization and extension.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation & Usage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="installation" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>

              <TabsContent value="installation" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5" />
                      <span>Installation</span>
                    </CardTitle>
                    <CardDescription>Install the package using your preferred package manager</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <span>npm install @exlaso/tech-stack-metadata</span>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <span>pnpm add @exlaso/tech-stack-metadata</span>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <span>yarn add @exlaso/tech-stack-metadata</span>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-slate-400 hover:text-white">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="usage" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Code className="h-5 w-5" />
                      <span>Usage Example</span>
                    </CardTitle>
                    <CardDescription>Basic usage of the tech stack metadata</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                      <div className="text-blue-400">import</div>{" "}
                      <div className="text-yellow-400 inline">{"{ techCategories }"}</div>{" "}
                      <div className="text-blue-400 inline">from</div>{" "}
                      <div className="text-green-400 inline">"@exlaso/tech-stack-metadata"</div>
                      <div className="text-white">;</div>
                      <div className="mt-4">
                        <div className="text-white">techCategories.</div>
                        <div className="text-yellow-400 inline">forEach</div>
                        <div className="text-white inline">((</div>
                        <div className="text-orange-400 inline">category</div>
                        <div className="text-white inline">) </div>
                        <div className="text-blue-400 inline">{"=>"}</div>
                        <div className="text-white inline"> {"{"}</div>

                        <div className="ml-4 mt-2">
                          <div className="text-white">console.</div>
                          <div className="text-yellow-400 inline">log</div>
                          <div className="text-white inline">(category.label); </div>
                          <div className="text-gray-500 inline">// e.g., 'Frontend', 'Backend'</div>
                        </div>

                        <div className="ml-4">
                          <div className="text-white">category.items.</div>
                          <div className="text-yellow-400 inline">forEach</div>
                          <div className="text-white inline">((</div>
                          <div className="text-orange-400 inline">item</div>
                          <div className="text-white inline">) </div>
                          <div className="text-blue-400 inline">{"=>"}</div>
                          <div className="text-white inline"> {"{"}</div>

                          <div className="ml-4 mt-1">
                            <div className="text-white">console.</div>
                            <div className="text-yellow-400 inline">log</div>
                            <div className="text-white inline">(item.name); </div>
                            <div className="text-gray-500 inline">// e.g., 'React'</div>
                          </div>

                          <div className="ml-4">
                            <div className="text-white">console.</div>
                            <div className="text-yellow-400 inline">log</div>
                            <div className="text-white inline">(item.icon); </div>
                            <div className="text-gray-500 inline">// React component from react-icons</div>
                          </div>

                          <div className="text-white">{"  });"}</div>
                        </div>

                        <div className="text-white">{"});"}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-8">
              Start building amazing developer portfolios and dashboards with structured tech stack metadata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="h-5 w-5 mr-2" />
                Install Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="https://github.com/vedantbhavsar26/tech-stack-metadata" target="_blank">
                  <Github className="h-5 w-5 mr-2" />
                  View Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-slate-900 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Package className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">tech-stack-metadata</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Built with ❤️ for developers</span>
              <Link
                href="https://github.com/vedantbhavsar26/tech-stack-metadata"
                target="_blank"
                className="hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
