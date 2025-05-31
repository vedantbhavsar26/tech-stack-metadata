import { Sidebar } from "@/components/sidebar";
import { sidebarContent } from "@/lib/data/sidebar";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { FunctionComponent } from "react";
import React from "react";

type typesforPage = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: typesforPage): Promise<Metadata> {
  const id = await params.then(p => p.id);
  const sidebar = sidebarContent.find(item => item.href?.split("/").at(-1)?.includes(id));

  if (!sidebar) {
    return {
      title: "Documentation Not Found",
      description: "The requested documentation page could not be found.",
    };
  }

  const title = `${sidebar.title} - Tech Stack Metadata Documentation`;
  const description = sidebar.description;
  const ogImage = `https://tech-stack-metadata.vedantbhavsar.com/og-image.png`;

  return {
    title,
    description,
    authors: [{ name: "Vedant Bhavsar", url: "https://vedantbhavsar.com" }],

    // Open Graph
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://tech-stack-metadata.vedantbhavsar.com/docs/${id}`,
      title,
      description,
      siteName: "Tech Stack Metadata",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${sidebar.title} - Documentation`,
        },
      ],
      publishedTime: new Date().toISOString(),
      authors: ["Vedant Bhavsar"],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@vedantbhavsar26",
      images: [ogImage],
    },

    // Canonical URL
    alternates: {
      canonical: `https://tech-stack-metadata.vedantbhavsar.com/docs/${id}`,
    },

    // Schema.org structured data for documentation
  };
}

const Page: FunctionComponent<typesforPage> = async (props) => {
  const id = await props.params.then(params => params.id);
  const sidebar = sidebarContent.find(sidebarItem => sidebarItem.href?.split("/").at(-1)?.includes(id));

  if (!sidebar)
    return notFound();

  return (
    <main className="relative mx-auto flex flex-col max-md:container md:flex-row gap-8">
      <Sidebar id={id} />
      <div className="px-4  md:px-0">
        <sidebar.component />
      </div>
    </main>
  );
};

export default Page;
