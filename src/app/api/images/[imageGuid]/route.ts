export async function GET(
  req: Request,
  { params }: { params: { imageGuid: string } }
): Promise<Response> {
  const { imageGuid } = await params;

  const imageData: ImageType = {
    guid: imageGuid,
    name: "Sunset Over Mountains",
    image: "/uploads/gallery/sunset-mountains.jpg",
    short_description: "A beautiful sunset over the mountain range.",
    description: `This image captures the warm glow of a sunset casting light over a rugged mountain landscape. 
The photo was taken during golden hour in the Swiss Alps and features vibrant colors and a dramatic sky.`,
    tags: ["sunset", "mountains", "nature", "landscape", "photography"],
    likes: 10000,
    created_at: "2024-06-15T18:30:00.000Z",
    updated_at: "2024-07-05T10:20:00.000Z",
  };

  return Response.json(imageData);
}
