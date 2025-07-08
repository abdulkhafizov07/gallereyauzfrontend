import { ImageDetailsComponent } from "./components";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080";

const fetchData = async (imageGuid: string): Promise<ImageType> => {
  const res = await fetch(`${baseUrl}/api/images/${imageGuid}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch image data");

  return res.json();
};

// Image detail metadata
export async function generateMetadata({
  params,
}: {
  params: { imageGuid: string };
}): Promise<Metadata> {
  const { imageGuid } = await params;
  const data = await fetchData(imageGuid);

  return {
    title: data.name ?? "Image Detail",
    description: data.short_description || "Image details page",
  };
}

// Image detail page
export default async function Page({
  params,
}: {
  params: { imageGuid: string };
}) {
  const { imageGuid } = await params;
  const data = await fetchData(imageGuid);

  return (
    <>
      <ImageDetailsComponent data={data} />
    </>
  );
}
