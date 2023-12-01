"use client";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { languages } from "@/content/IndianLanguages/languages";

const TreeMap = () => (
  <ResponsiveTreeMap
    data={languages}
    identity="name"
    value="total"
    valueFormat=".02s"
    tile="binary"
    // margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    label={(e) => `${e.id} (${e.formattedValue})`}
    labelSkipSize={55}
    parentLabelPosition="top"
    leavesOnly={true}
    orientLabel={false}
    nodeOpacity={1}
    theme={{
      tooltip: {
        container: {
          background: "black",
        },
      },
    }}
  />
);

export default TreeMap;
