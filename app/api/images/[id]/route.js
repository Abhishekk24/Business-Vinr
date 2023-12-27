import GalleryImage from "@/models/gallery";
import { connectToDb } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();

    const gallery = await GalleryImage.findById(params.id);
    if (!gallery) return new Response("blog Not Found", { status: 404 });

    return new Response(JSON.stringify(gallery), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};