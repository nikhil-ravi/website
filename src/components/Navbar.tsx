"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import { LayoutGroup, motion } from "framer-motion";
import navRoutes from "@/content/navRoutes";

function Navbar() {
  return (
    <aside className="-ml-2 mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto">
            <div className="flex flex-row space-x-0 pr-10">
              <Suspense fallback={null}>
                {Object.entries(navRoutes).map(([path, { name }]) => (
                  <NavItem key={path} path={path} name={name} />
                ))}
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

export default Navbar;

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }
  let isActive = pathname === path;

  return (
    <Link
      key={path}
      href={path}
      className="flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
    >
      <span className="relative px-2 py-1">
        {name}
        {isActive ? (
          <motion.div
            className="-z-1 absolute inset-0 top-7 mx-2 h-[1px] bg-neutral-200 from-transparent to-green-900 dark:bg-neutral-800 dark:bg-gradient-to-r"
            layoutId="navbar"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
