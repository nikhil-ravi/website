"use client";

import { teamColors } from "@/content/IplElo/constants";
import { ResponsiveBoxPlot } from "@nivo/boxplot";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { quantiles as data } from "@/content/IplElo/quantiles";

const EloBox = () => {
  if (!data)
    return (
      <Skeleton className="m-auto h-[520px] items-center justify-center" />
    );
  return (
    <div className="h-[520px]">
      <ResponsiveBoxPlot
        data={data}
        margin={{ top: 0, right: 0, bottom: 40, left: 50 }}
        colorBy="group"
        colors={({ group }) => teamColors[group]}
        padding={0.5}
        enableGridX={true}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Team",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Elo",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        layers={["grid", "axes", "boxPlots", "markers", "annotations"]}
        borderRadius={2}
        borderWidth={2}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        medianWidth={4}
        medianColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        whiskerWidth={4}
        whiskerEndSize={0.6}
        whiskerColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        motionConfig="stiff"
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 70,
            translateY: 0,
            itemWidth: 60,
            itemHeight: 20,
            itemsSpacing: 3,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            symbolSize: 20,
            symbolShape: "square",
          },
        ]}
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

export default EloBox;
