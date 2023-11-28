"use client";

import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { teamColors } from "@/content/IplElo/constants";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { seasonEndRank as data } from "@/content/IplElo/rank";

const RankTableSwarm = () => {
  if (!data)
    return (
      <Skeleton className="m-auto h-[520px] items-center justify-center" />
    );
  const data_ = [].concat
    .apply(
      [],
      data.map((datum) => [
        ...datum.data.map((d) => ({
          id: datum.id + "." + d.x,
          eloRank: d.y,
          tableRank: d.table,
          elo: d.elo,
          year: d.x,
        })),
      ]),
    )
    .filter((d) => d.eloRank !== null && d.tableRank !== null);
  const groups = [...new Set(data_.map((d) => d.eloRank))].sort(
    (a, b) => a - b,
  );

  return (
    <div className="h-[520px]">
      {data && (
        <ResponsiveSwarmPlot
          data={data_}
          groups={groups}
          groupBy="eloRank"
          value="tableRank"
          valueFormat=".0f"
          valueScale={{ type: "linear", min: 1, max: 10, reverse: true }}
          size={{
            key: "elo",
            values: [1440, 1530],
            sizes: [5, 10],
          }}
          forceStrength={4}
          simulationIterations={200}
          colorBy="group"
          colors={({ id }) => {
            return teamColors[id.split(".")[0]];
          }}
          borderColor={{
            from: "color",
            modifiers: [
              ["darker", 0.6],
              ["opacity", 0.5],
            ],
          }}
          margin={{ top: 10, right: 0, bottom: 50, left: 100 }}
          axisBottom={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Elo Rank",
            legendPosition: "middle",
            legendOffset: 46,
          }}
          axisLeft={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: "League Rank",
            legendPosition: "middle",
            legendOffset: -35,
          }}
          theme={{
            tooltip: {
              container: {
                background: "#333",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default RankTableSwarm;
