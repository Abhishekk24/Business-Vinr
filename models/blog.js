import { Schema, model, models } from "mongoose";

const blogSchema = new Schema(
    {
        title:{
            type: String,
            required: [true,'Title is required']
        },
        description:{
            type: String,
        },
        content:{
            type: String,
            required: [true, 'Content is required']
        },
        category:{
            type: String,
            required: [true, 'Category is required']
        },
        coverImg:{
            type: String,
            required: [true, 'cover-image is required']
        }
    },
    {
        timestamps: true,
    }
);

const Blog = models.Blog || model("Blog",blogSchema);

export default Blog;