import React from "react";

export interface Education {
  institution: string;
  title: React.JSX.Element | string;
  subtitle?: React.JSX.Element;
  start: Date;
  end?: Date;
}

export const education: Education[] = [
  {
    institution: "Cornell University",
    title: "Ph.D. in Electrical Engineering",
    subtitle: (
      <span className="text-xs" aria-details="minors">
        Applied Mathematics and Computer Science
      </span>
    ),
    start: new Date(2017, 8),
  },
  {
    institution: "Cornell University",
    title: "M.S. in Electrical Engineering",
    start: new Date(2017, 8),
    end: new Date(2023, 5),
  },
  {
    institution: "Arizona State University",
    title: (
      <>
        <span className="line-through">Ph.D.</span> in Electrical Engineering,
        <span className="text-xs">
          {" "}
          transferred with an M.S. to Cornell University
        </span>
      </>
    ),
    start: new Date(2017, 8),
    end: new Date(2021, 8),
  },
  {
    institution: "PES Institute of Technology",
    title: "B.E. in Electronics and Communications Engineering",
    start: new Date(2013, 7),
    end: new Date(2017, 4),
  },
];
