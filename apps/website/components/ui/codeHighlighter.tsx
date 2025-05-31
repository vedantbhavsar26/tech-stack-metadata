"use client";

import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function CodeHighlighter({
  lang = "ts",
  code,
  className = "",
}: {
  lang?: string;
  code: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-lg", className)}>
      <SyntaxHighlighter
        language={lang}
        style={oneLight}
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          background: "transparent",
          fontFamily: "'Fira Code', monospace",
        }}
        codeTagProps={{
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
