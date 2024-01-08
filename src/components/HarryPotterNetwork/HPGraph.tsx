"use client";

import CytoscapeComponent from "react-cytoscapejs";
import { data } from "@/content/HarryPotterNetwork/data";
import stylesheet from "@/content/HarryPotterNetwork/stylesheet";

export default function HPGraph({
  zoomingEnabled = false,
}: {
  zoomingEnabled?: boolean;
}) {
  const elements = CytoscapeComponent.normalizeElements(data.elements);
  return (
    <CytoscapeComponent
      elements={elements}
      zoomingEnabled={zoomingEnabled}
      zoom={0.35}
      pan={{ x: 350, y: 400 }}
      layout={{ name: "preset" }}
      style={{
        height: "720px",
        width: "100%",
      }}
      stylesheet={[
        ...stylesheet,
        {
          selector: "node",
          style: {
            content: "data(name)",
            "font-size": "mapData(pagerank, 0, 0.2001249475761213, 10, 100)",
            "text-valign": "center",
            "text-halign": "center",
            "font-style": "italic",
            "font-family": "Harry P",
            color: "#fff",
          },
        },
      ]}
    />
  );
}
