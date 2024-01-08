"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  first: string;
};

const Breadcrumb = ({ first }: TBreadCrumbProps) => {
  const paths = usePathname();
  let pathNames = paths.split("/").filter((path) => path);
  // Generate URLs for each part
  let generatedUrls = pathNames.map((_, index) => {
    const url = pathNames.slice(0, index + 1).join("/");
    return `/${url}`;
  });
  const index = pathNames.indexOf(first);
  pathNames.splice(0, index);
  generatedUrls.splice(0, index);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {generatedUrls.map((url, index) => {
          return (
            <>
              <Link
                href={url}
                className={
                  index < generatedUrls.length - 1
                    ? "text-gray-400"
                    : "text-gray-50"
                }
              >
                {prettify(pathNames[index])}
              </Link>
              {index < generatedUrls.length - 1 && <Separator />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;

function prettify(str: string) {
  var words = str.match(/([^-]+)/g) || [];
  words.forEach(function (word, i) {
    words[i] = word[0] + word.slice(1);
  });
  return words.join(" ");
}

const Separator = () => (
  <span className="text-gray-700">
    <svg
      data-testid="geist-icon"
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
      style={{ width: "18px", height: "18px" }}
    >
      <path d="M9 18l6-6-6-6"></path>
    </svg>
  </span>
);
