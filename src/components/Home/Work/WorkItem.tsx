import { Work } from "@/content/Home/workData";
import React from "react";

function WorkItem({ item, className }: { item: Work; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mb-1 text-lg font-medium tracking-tighter">
        {item.organisation.name}
      </h3>
      {item.positions && (
        <ul className="list-disc">
          {item.positions
            .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
            .map((position, index) => (
              <li key={index} className="">
                <h4 className="mb-1 text-base font-medium tracking-tighter">
                  {position.title},{" "}
                  <span className="text-gray-600 dark:text-gray-400">
                    {position.startDate.toLocaleDateString(undefined, {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    —{" "}
                    {position.endDate
                      ? position.endDate.toLocaleDateString(undefined, {
                          month: "short",
                          year: "numeric",
                        })
                      : "Present"}
                  </span>
                </h4>

                {position.body &&
                  // if position.body is an array, map it to a list of <p> elements
                  (Array.isArray(position.body) ? (
                    <ul>
                      {position.body.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    // If it is a ReactNode, just render it
                    <>{position.body}</>
                  ))}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default WorkItem;
