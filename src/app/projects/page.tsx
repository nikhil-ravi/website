"use client";

import React from "react";
import { projects } from "@/content/projectsData";
import Project from "@/components/Project";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function page() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="5px">
        {projects.map((project, index) => (
          <Project key={project.title} item={project} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default page;
