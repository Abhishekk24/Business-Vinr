// Import necessary dependencies
'use client'
import React, { useState } from 'react';

const AddImage = () => {
  // State to manage the uploaded image and other relevant data
  const [image, setImage] = useState(null);
  
  // Function to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.includes('image')) {
      return alert('Please upload an image file');
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result;
      setImage(result);
    };
  };

  // Function to submit the image and data to MongoDB
  const handleAddImage = async (e) => {
    e.preventDefault();
   
    try {
      const form = e.currentTarget;
      const fileInput = Array.from(form.elements).find(({name}) => name === 'file');
      const formData = new FormData();

      for (const file of fileInput.files) {
        formData.append('file', file);
      }

      formData.append('upload_preset', 'vtxkm6s0');

      // Upload image to Cloudinary
      const cloudinaryData = await fetch('https://api.cloudinary.com/v1_1/dcsvvfai3/image/upload', {
        method: 'POST',
        body: formData
      }).then(r => r.json());

      // Post request to MongoDB
      const mongoDbResponse = await fetch('/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageData: cloudinaryData.secure_url,  // or any other data you want to store
        }),
      }).then(r => r.json());

      // Handle MongoDB response as needed
      console.log('MongoDB Response:', mongoDbResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-4">Add Image</h1>
      <form onSubmit={handleAddImage} className="flex flex-col gap-3">
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={handleImageChange}
          className="border-2 border-gray-500 p-2 rounded"
        />
        {image && (
          <img
            src={image}
            alt="Uploaded Image"
            className="w-full h-[400px] object-cover rounded-md mt-3"
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg"
        >
          Add Image
        </button>
      </form>
    </div>
  );
};

export default AddImage;
