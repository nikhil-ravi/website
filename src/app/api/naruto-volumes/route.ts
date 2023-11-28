import { volumes } from "@/content/NarutoColors/volumes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const volume = request.nextUrl.searchParams.get("volume");
  if (volume) {
    const volumeData = volumes.find((v) => v.volume === Number(volume));
    if (volumeData) {
      return NextResponse.json(volumeData);
    }
    return NextResponse.json(
      {
        error: "Volume not found. See validVolumes for valid volumes.",
        validVolumes: volumes.map((v) => v.volume),
      },
      { status: 404 },
    );
  }
  return NextResponse.json(volumes);
}
