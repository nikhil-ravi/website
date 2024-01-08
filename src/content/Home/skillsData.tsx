import {
  SiJavascript,
  SiNextdotjs,
  SiAmazonaws,
  SiPython,
  SiGit,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPlotly,
  SiR,
  SiPostgresql,
  SiMongodb,
  SiNeo4J,
  SiOpenaigym,
  SiPytorch,
} from "react-icons/si";
import {
  GCPIcon,
  MATLABIcon,
  RayIcon,
  StatsmodelsIcon,
} from "@/components/Icons";

export type Skill = {
  name: string;
  Icon: React.JSX.Element;
};

export const skills = [
  {
    name: "Python",
    Icon: SiPython,
  },
  {
    name: "NumPy",
    Icon: SiNumpy,
  },
  {
    name: "pandas",
    Icon: SiPandas,
  },
  {
    name: "TensorFlow",
    Icon: SiTensorflow,
  },
  {
    name: "PyTorch",
    Icon: SiPytorch,
  },
  {
    name: "OpenAi Gym",
    Icon: SiOpenaigym,
  },
  {
    name: "Ray RLlib",
    Icon: RayIcon,
  },
  {
    name: "scikit-learn",
    Icon: SiScikitlearn,
  },
  {
    name: "statsmodels",
    Icon: StatsmodelsIcon,
  },
  {
    name: "plotly",
    Icon: SiPlotly,
  },
  {
    name: "Google Cloud Platform",
    Icon: GCPIcon,
  },
  {
    name: "AWS",
    Icon: SiAmazonaws,
  },
  {
    name: "MATLAB",
    Icon: MATLABIcon,
  },
  {
    name: "R",
    Icon: SiR,
  },
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "React.js",
    Icon: SiJavascript,
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    name: "Neo4J",
    Icon: SiNeo4J,
  },
  {
    name: "Git",
    Icon: SiGit,
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
  },
];
