"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeSeriesScale,
  Colors,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { elo as data } from "@/content/IplElo/elo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeSeriesScale,
  Colors,
);

const EloLine = () => {
  if (!data)
    return (
      <Skeleton className="m-auto h-[520px] items-center justify-center" />
    );
  return (
    <Line
      datasetIdKey="elo"
      data={data}
      options={{
        responsive: true,
        animation: false,
        plugins: {
          legend: {
            position: "right",
            align: "center",
            labels: {
              usePointStyle: true,
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "Date" },
            type: "timeseries",
            time: {
              unit: "month",
            },
          },
          y: {
            title: { display: true, text: "Elo" },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      }}
    />
  );
};

export default EloLine;
