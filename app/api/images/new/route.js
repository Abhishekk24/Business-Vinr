import GalleryImage from "@/models/gallery";
import { connectToDb } from "@/utils/database";

export const POST = async (req) => {
    const {imageURL ,description, category } = await req.json();

    try {
        await connectToDb();
        const newimage = new GalleryImage({
            imageURL,
            description,
            category,
        })

        await newimage.save();
        console.log(newimage);
        return new Response(JSON.stringify(newimage), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new Blog..", {status:500})
    }
}