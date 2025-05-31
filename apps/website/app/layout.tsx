import { inter } from "@/components/fonts";

import "./globals.css";

import { Header } from "@/components/header";
import Script from "next/script";
import type React from "react";
import { Toaster } from "sonner";

export const metadata = {
  title: "tech-stack-metadata",
  description: "A reusable and categorized metadata structure for tech stacks",
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
