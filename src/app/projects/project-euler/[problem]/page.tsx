import Breadcrumb from "@/components/Breadcrumb";
import { CustomMDX } from "@/components/mdx-components";
import { getProjectEulerProblems } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Page({
  params: { problem },
}: {
  params: { problem: string };
}) {
  try {
    let { content } = getProjectEulerProblems().find(
      (file) => file.metadata.problem === problem,
    );
    // return <CustomMDX source={content} />;
    return (
      <main className="mx-auto w-full min-w-0">
        <Breadcrumb first={"project-euler"} />
        <CustomMDX source={content} />
      </main>
    );
  } catch (e) {
    console.log(e);
    notFound();
  }
}

export async function generateStaticParams() {
  return getProjectEulerProblems().map((file) => ({
    params: { problem: file.metadata.problem },
  }));
}
