"use client";

import { ResponsiveBump } from "@nivo/bump";

import Point from "./Rank/Point";
import { teamColors } from "@/content/IplElo/constants";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { seasonEndRank as data } from "@/content/IplElo/rank";

const RankBump = () => {
  if (!data)
    return (
      <Skeleton className="m-auto h-[520px] items-center justify-center" />
    );
  return (
    <div className="h-[520px]">
      <ResponsiveBump
        data={data}
        colors={({ id }) => teamColors[id]}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={8}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={({ serie: { id } }) => teamColors[id]}
        pointComponent={Point}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Season",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "ELO Ranking",
          legendPosition: "middle",
          legendOffset: -30,
        }}
        margin={{ top: 0, right: 45, bottom: 40, left: 35 }}
        axisRight={null}
        theme={{
          tooltip: {
            container: {
              background: "#333",
            },
          },
        }}
      />
    </div>
  );
};

export default RankBump;
