import { Github, Package } from "lucide-react";
import Link from "next/link";
import type React from "react";

export function Header() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div
                className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
              >
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold  capitalize">Tech-stack-metadata</h1>
                <p className="text-sm text-muted-foreground">@exlaso/tech-stack-metadata</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex items-center space-x-6">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/vedantbhavsar26/tech-stack-metadata"
                    target="_blank"
                    className="flex items-center text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
