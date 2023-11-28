import { volumes } from "@/content/NarutoColors/volumes";

const WWW = ({
  turn = "left",
  enableRandomTurns = false,
  strokeWidth = 1,
  circleRadius = 5,
}: {
  turn?: "left" | "right";
  enableRandomTurns?: boolean;
  strokeWidth?: number;
  circleRadius?: number;
}) => {
  const preparedData = volumes
    .map((issue) =>
      issue.clusters
        .sort((a, b) => b.freq - a.freq)
        .map(({ hex, freq }) => ({
          hex,
          freq,
        })),
    )
    .flat(1);
  let x = 250;
  let y = 250;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  if (turn === "right") {
    // If turning right, shift the directions array
    directions.push(directions.shift() as [number, number]);
  }

  let maxX = x;
  let minX = x;
  let maxY = y;
  let minY = y;

  const coordinates = preparedData.map(({ freq, hex }, i) => {
    const oldX = x;
    const oldY = y;
    if (enableRandomTurns) {
      //   Choose one of the four directions at random
      const turn_ = Math.floor(Math.random() * directions.length);
      x += directions[turn_][0] * freq * 200;
      y += directions[turn_][1] * freq * 200;
    } else {
      x += directions[i % 4][0] * freq * 200;
      y += directions[i % 4][1] * freq * 200;
    }
    maxX = Math.max(maxX, x);
    minX = Math.min(minX, x);
    maxY = Math.max(maxY, y);
    minY = Math.min(minY, y);
    return { x1: oldX, y1: oldY, x2: x, y2: y, color: hex };
  });

  return (
    <svg
      viewBox={`${minX - 10} ${minY - 10} ${maxX + 10 - (minX - 10)} ${
        maxY + 10 - (minY - 10)
      }`}
    >
      {/* Add a circle at the first point */}
      <circle
        cx={coordinates[0].x1}
        cy={coordinates[0].y1}
        r={circleRadius}
        fill="green"
      />
      {/* Add a circle at the last point */}
      <circle
        cx={coordinates[coordinates.length - 1].x2}
        cy={coordinates[coordinates.length - 1].y2}
        r={circleRadius}
        fill="red"
      />
      {coordinates.map((coord, i) => (
        <line
          key={i}
          x1={coord.x1}
          y1={coord.y1}
          x2={coord.x2}
          y2={coord.y2}
          stroke={coord.color}
          strokeWidth={strokeWidth}
        />
      ))}
    </svg>
  );
};

export default WWW;
