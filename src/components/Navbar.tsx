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
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
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
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  let isActive = pathname === path;

  return (
    <Link
      key={path}
      href={path}
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
    >
      <span className="relative py-1 px-2">
        {name}
        {path === pathname ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 -z-1 dark:bg-gradient-to-r from-transparent to-green-900"
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
