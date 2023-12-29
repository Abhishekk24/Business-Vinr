import Blog from "@/models/blog";
import { connectToDb } from "@/utils/database";

export const POST = async (req) => {
    const { content, title, description, category, cover_img } = await req.json();

    try {
        await connectToDb();
        const newBlog = new Blog({
            title,
            description,
            content,
            category,
            coverImg: cover_img
        })

        await newBlog.save();
        console.log(newBlog);
        return new Response(JSON.stringify(newBlog), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new Blog..", {status:500})
    }
}