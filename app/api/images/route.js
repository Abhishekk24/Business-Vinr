import GalleryImage from "@/models/gallery";
import { connectToDb } from "@/utils/database";

export const GET = async(request) => {
    try {
        await connectToDb();

        const gallery = await GalleryImage.find({});

        return new Response(JSON.stringify(gallery), {status:200})
    } catch (error) {
        return new Response("Failed to fetch blogs", {status:500})
    }
}