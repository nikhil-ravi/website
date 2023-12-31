import { Project } from "@/content/projectsData";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function Project({ item }: { item: Project; className?: string }) {
  return (
    <div className="mx-auto mb-4 overflow-hidden rounded-md p-1 duration-300 hover:scale-105 md:max-w-[300px] lg:max-w-[400px]">
      {(item.Visual || item.image) && (
        <Link href={item.url || item.github}>
          {item.Visual ? (
            <div className="h-56">{item.Visual}</div>
          ) : (
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={item.image}
              alt="Project Image"
              style={{ width: "100%", height: "auto" }}
              className=""
            />
          )}
        </Link>
      )}
      <div className={item.Visual || item.image ? "pt-4" : ""}>
        <Link
          href={item.url || item.github}
          className="text-lg font-medium tracking-tighter"
        >
          {item.title}
        </Link>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-4">
          {item.url && (
            <Link href={item.url} className="flex items-center gap-1">
              <FaLink /> read
            </Link>
          )}
          {item.github && (
            <Link href={item.github} className="flex items-center gap-1">
              <FaGithub /> github
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
