"use client";
import { inter } from "@/components/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

export function Shiki({
  lang = "ts",
  code,
  className = "",
  theme = "github-light",
}: {
  lang?: string;
  code: string;
  className?: string;
  theme?: string;
}) {
  const [out, setOut] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    codeToHtml(code, {
      lang,
      theme,
    }).then(setOut).catch(
      console.error,
    ).finally(() => setIsLoading(false));
  }, [theme]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: out }}
      style={inter.style}
      className={cn("rounded-md overflow-hidden", className)}
    />
  );
}
