import { inter } from "@/components/fonts";

import "./globals.css";

import { Header } from "@/components/header";
import Script from "next/script";
import type React from "react";
import { Toaster } from "sonner";

export const metadata = {
  title: {
    default: "Tech Stack Metadata | Developer Portfolio Technology Showcase",
    template: "%s | Tech Stack Metadata",
  },
  description: "A reusable and categorized metadata structure for tech stacks with React Icons integration - perfect for portfolios, dashboards, and developer showcases.",
  keywords: ["tech stack", "developer portfolio", "react icons", "technology showcase", "web development", "tech metadata"],
  authors: [{ name: "Vedant Bhavsar", url: "https://vedantbhavsar.com" }],
  creator: "Vedant Bhavsar",
  publisher: "Vedant Bhavsar",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tech-stack-metadata.vedantbhavsar.com",
    siteName: "Tech Stack Metadata",
    title: "Tech Stack Metadata | Developer Portfolio Technology Showcase",
    description: "A reusable and categorized metadata structure for tech stacks with React Icons integration - perfect for portfolios, dashboards, and developer showcases.",
    images: [
      {
        url: "https://tech-stack-metadata.vedantbhavsar.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Stack Metadata - Showcase your technology expertise",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Tech Stack Metadata | Developer Portfolio Technology Showcase",
    description: "A reusable and categorized metadata structure for tech stacks with React Icons integration",
    creator: "@vedantbhavsar26",
    images: ["https://tech-stack-metadata.vedantbhavsar.com/twitter-image.png"],
  },

  // Apple specific
  appleWebApp: {
    title: "Tech Stack Metadata",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  // App information
  applicationName: "Tech Stack Metadata",
  category: "development",

  // Canonical URL
  alternates: {
    canonical: "https://tech-stack-metadata.vedantbhavsar.com",
  },

  // Manifest
  manifest: "https://tech-stack-metadata.vedantbhavsar.com/manifest.json",

  // Icons
  icons: {
    icon: [
      { url: "/icon.png" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster position="top-center" />
      </body>
      <Script defer src="https://analytics.vedantbhavsar.com/script.js" data-website-id="b62c48a4-627a-4087-a94b-399f65209a9a"></Script>
    </html>
  );
}
