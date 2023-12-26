import React from 'react';

const ElephantaBrandComponent = () => {
  return (
    <div className='container mx-auto pb-24 justify-between '>
      <h2 className="section-title pb-12 xl:pb-36 text-center mx-auto ">Elephanta</h2>
      <div className="flex ">
        <div className="elephanta-logo-container bg-gray-800 text-white p-8 rounded-md mr-8 gap-y-12 xl:gap-y-24 xl:gap-x-8 ">
          <img
            src="/elephanta-logo.png" // Replace with your actual logo path
            alt="Elephanta Logo"
            className="w-16 h-16 mb-4"
          />
          <div className='container bg-gray-300 rounded-md text-black p-4'>
            <p className="text-sm">Crafting Innovative Solutions</p>
          </div>
        </div>

        <div className="elephanta-description-container w-3/3 bg-gray-300 rounded-md p-8 text-black">
          <h3 className="text-2xl font-bold mb-4">About Elephanta</h3>
          <p className="text-sm">
            Elephanta is dedicated to delivering cutting-edge solutions that redefine the industry standards. Our commitment to innovation and excellence drives us to craft products and services that cater to the evolving needs of our customers. With a focus on quality and reliability, Elephanta aims to make a lasting impact in the world of technology.
          </p>
          {/* Add more details or sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default ElephantaBrandComponent;
