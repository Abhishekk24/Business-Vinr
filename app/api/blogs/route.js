import Blog from "@/models/blog";
import { connectToDb } from "@/utils/database";

export const GET = async(request) => {
    try {
        await connectToDb();

        const blogs = await Blog.find({});

        return new Response(JSON.stringify(blogs), {status:200})
    } catch (error) {
        return new Response("Failed to fetch blogs", {status:500})
    }
}