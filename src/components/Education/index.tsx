import React from "react";
import { education } from "@/content/educationData";
import EducationItem from "./EducationItem";

function Education() {
  return (
    <div>
      {education.map((educ, index) => (
        <EducationItem
          key={index}
          item={educ}
          className={index !== education.length - 1 ? "-mb-4" : ""}
        />
      ))}
    </div>
  );
}

export default Education;
