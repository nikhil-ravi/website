"use client";

import React from "react";
import { projects } from "@/content/projectsData";
import Project from "@/components/Project";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function page() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 450: 2 }}>
      <Masonry gutter="25px">
        {projects.map((project, index) => (
          <Project key={project.title} item={project} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default page;
