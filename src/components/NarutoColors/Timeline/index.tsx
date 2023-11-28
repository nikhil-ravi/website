"use client";

import { volumes } from "@/content/NarutoColors/volumes";
import Image from "next/image";
import IssueChart from "./IssueChart";
import { Volume } from "@/content/NarutoColors";
import { Tooltip } from "react-tooltip";

function Timeline({
  part,
  number,
  enableHoverEffect = false,
  enableTooltip = false,
  calledBy,
}: {
  part?: number;
  number?: number;
  enableHoverEffect?: boolean;
  enableTooltip?: boolean;
  calledBy: string;
}) {
  const issues = number
    ? volumes.filter((volume) => volume.volume === number)
    : part
      ? volumes.filter((volume) =>
          part === 1 ? volume.volume <= 27 : volume.volume > 27,
        )
      : volumes;
  return (
    <div className="flex h-full w-full">
      {issues.map((issue) => (
        <div key={issue.volume} className="h-full w-full">
          <a
            data-tooltip-id={`${calledBy}-${issue.volume}`}
            // data-tooltip-float={true}
            // data-tooltip-position-strategy="fixed"
          >
            <IssueChart volume={issue} enableHoverEffect={enableHoverEffect} />
          </a>
          <TooltipContent
            id={`${calledBy}-${issue.volume}`}
            issue={issue}
            hidden={!enableTooltip}
          />
        </div>
      ))}
    </div>
  );
}

const TooltipContent = ({
  id,
  issue,
  hidden,
}: {
  id: string;
  issue: Volume;
  hidden: boolean;
}) => (
  <Tooltip
    id={id}
    style={{
      zIndex: 99,
    }}
    hidden={hidden}
  >
    <div className="font-naruto">
      {issue.volume}. <strong>{issue.name}</strong>
    </div>
    <div className="-mb-4">
      {new Date(issue.date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </div>
    <Image
      src={`/NarutoColors/covers/${issue.volume}.webp`}
      alt="issue cover"
      sizes="100vw"
      width={0}
      height={0}
      style={{ width: "auto", height: "350px" }}
    />
  </Tooltip>
);

export default Timeline;
