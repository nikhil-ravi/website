import { getProjectEulerProblems } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { CustomMDX } from "../mdx-components";

function ListProblems() {
  let problems = getProjectEulerProblems();
  return (
    <ul className="list-none">
      {problems.map((file) => (
        <li key={file.metadata.problem}>
          <Link
            href={`/projects/project-euler/${file.metadata.problem}`}
            className="flex items-center gap-2"
          >
            {file.metadata.problem}. <CustomMDX source={file.metadata.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListProblems;
