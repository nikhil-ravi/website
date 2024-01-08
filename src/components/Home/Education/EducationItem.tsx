import { Education } from "@/content/Home/educationData";
import React from "react";

function EducationItem({
  item,
  className,
  children,
}: {
  item: Education;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h3 className="mb-1 text-lg font-medium tracking-tighter">
        {item.institution}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {item.title}, {item.subtitle ? item.subtitle : ""}
        {item.subtitle ? "," : ""} {item.start.getFullYear()}-
        {item.end?.getFullYear() || "present"}
      </p>
      {children}
    </div>
  );
}

export default EducationItem;
