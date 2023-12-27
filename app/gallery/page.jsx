import React from 'react';

const Gallery = () => {
  // const images = [
  //   './gallery/1 (1).jpg',
  //   './gallery/1 (2).png',
  //   './gallery/1 (3).jpg',
  //   './gallery/1 (4).jpg',
  //   './gallery/1 (5).jpg',
  //   './gallery/1 (6).jpg',
  //   './gallery/1 (7).jpg',
  //   './gallery/1 (8).jpg',
  //   './gallery/1 (9).jpg',
  //   './gallery/1 (10).jpg',
  //   './gallery/1 (11).jpg',

  // ];

  return (
    <div className="bg-gray-100 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`flex justify-center items-center ${index % 5 === 2 || index % 5 === 4 ? 'md:row-span-2' : ''}`}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
