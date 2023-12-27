import { Schema, model, models } from "mongoose";

const galleryImageSchema = new Schema(
  {
    imageURL: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
  },
  {
    timestamps: true,
  }
);

const GalleryImage = models.GalleryImage || model("GalleryImage", galleryImageSchema);

export default GalleryImage;
