import type { MDXComponents } from "mdx/types";
import { customComponents } from "@/components/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  };
}
