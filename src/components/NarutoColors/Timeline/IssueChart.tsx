import { Volume } from "@/content/NarutoColors";

type IssueChartProps = {
  volume: Volume;
  enableHoverEffect?: boolean;
};

const IssueChart = ({ volume, enableHoverEffect = false }: IssueChartProps) => {
  return (
    <div
      className={`relative h-full w-full ${
        enableHoverEffect ? "hover:scale-110" : ""
      }`}
    >
      {volume.clusters
        .sort((a, b) => a.hsv_H - b.hsv_H)
        .map(({ hex, freq }, index) => (
          <div
            key={index}
            style={{
              backgroundColor: hex,
              height: `${freq * 100}%`,
              width: "100%",
            }}
          />
        ))}
    </div>
  );
};

export default IssueChart;
