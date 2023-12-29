import Blog from "@/models/blog";
import { connectToDb } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();

    const blog = await Blog.findById(params.id);
    if (!blog) return new Response("blog Not Found", { status: 404 });

    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};