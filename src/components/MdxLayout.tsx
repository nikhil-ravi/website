export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <article className="prose-quoteless prose prose-neutral dark:prose-invert">
      {children}
    </article>
  );
}
