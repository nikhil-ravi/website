"use client";

import React from "react";
import { projects } from "@/content/projectsData";
import Project from "./ProjectItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ProjectsList() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 450: 2 }}>
      <Masonry gutter="25px">
        {projects.map((project) => (
          <Project key={project.title} item={project} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ProjectsList;
