import React from "react";
import { work } from "@/content/Home/workData";
import WorkItem from "./WorkItem";

function Work() {
  return (
    <div>
      {work.map((workItem, index) => (
        <div key={index}>
          <WorkItem item={workItem} />
          {index !== work.length - 1 && (
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Work;
