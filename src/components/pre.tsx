"use client";

import { useRef, useState } from "react";

export default function Pre({ children }: { children: React.ReactNode }) {
  const textInput = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    if (textInput.current !== null) {
      setCopied(true);
      navigator.clipboard.writeText(textInput.current.textContent!);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  //   What is the language of the code snippet?

  return (
    <pre className="blog-pre !my-0 !w-full  !overflow-x-auto !rounded-md border border-black  dark:border-gray-200/60">
      {children}
    </pre>
  );
}
