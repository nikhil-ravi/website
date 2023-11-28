"use client";

import { ResponsivePie } from "@nivo/pie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { daysAtRank1 as data } from "@/content/IplElo/rank";

const DaysAtRank1 = () => {
  if (!data)
    return (
      <Skeleton className="m-auto h-[520px] items-center justify-center" />
    );

  return (
    <div className="h-[520px]">
      <ResponsivePie
        data={data}
        value={"days"}
        colors={{ datum: "data.color" }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        // arcLinkLabelsDiagonalLength={100}
        // arcLinkLabelsStraightLength={100}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
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

export default DaysAtRank1;
