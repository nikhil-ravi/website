import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { hostname: "imgur.com" },
      { hostname: "pics.craiyon.com" },
      { hostname: "raw.githubusercontent.com" },
    ],
  },
};

const rehypePrettyCodeOptions = {
  theme: "github-dark",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, { output: "mathml" }],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});

export default withMDX(nextConfig);
