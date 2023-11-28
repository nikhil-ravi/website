import { Metadata } from "next";
import ProjectsList from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my projects",
};

function page() {
  return <ProjectsList />;
}

export default page;
