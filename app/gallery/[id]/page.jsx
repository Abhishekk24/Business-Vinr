'use client';
import React, { useEffect, useState } from 'react';

const Image = ({ params }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`/api/images/${params.id}`, {
        method: 'GET',
      });
      const data = await response.json();
      setImage(data);
      document.getElementById('content').innerHTML = data?.content;
    };

    if (image == null) {
      fetchImage();
    }
  }, [params.id, image]);

  return (
    <div className="bg-gray-100 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {image && (
          <div className="flex justify-center items-center md:row-span-2">
            <img
              src={image?.imageURL}
              alt={`Image ${params.id}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}
      </div>

      <div className="mt-5">
        <div id="content" className="flex flex-col items-center">
          <div className="text-2xl font-bold">{image?.title}</div>
          <div className="text-gray-600">{image?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Image;
