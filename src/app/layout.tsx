import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://www.nikhilravi.com"),
  title: {
    default: "Nikhil Ravi",
    template: "%s | Nikhil Ravi",
  },
  description: "PhD student, software engineer, and hiker.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.SITE_URL,
    siteName: "Nikhil Ravi",
    title: "Nikhil Ravi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-[#111010] dark:text-white"
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          <article className="prose-quoteless prose prose-neutral dark:prose-invert">
            {children}
          </article>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
