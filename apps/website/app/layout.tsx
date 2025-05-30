import type React from "react"
import "./globals.css"
import {Inter} from "next/font/google"
import {Toaster} from "sonner"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "tech-stack-metadata",
  description: "A reusable and categorized metadata structure for tech stacks",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <Toaster position="top-center" />
      </body>
    </html>
  )
}
