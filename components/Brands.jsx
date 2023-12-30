import React from 'react';

const ElephantaBrandComponent = () => {
  return (
    <div className='container mx-auto pb-6 md:pb-24 justify-between'>
      <h2 className="section-title pb-6 md:pb-12 xl:pb-36 text-center mx-auto">Elephanta</h2>
      <div className="flex flex-col md:flex-row py-1">
        <div className="elephanta-logo-container md:w-1/3 bg-gray-200 text-white p-4 md:p-8 rounded-md mb-4 md:mr-8 md:mb-0">
          <div className='items-center'>
            <img
              src="/brands/Elephanta.png" // Replace with your actual logo path
              alt="Elephanta Logo"
              className="w-15 h-15 mb-1 md:mb-12"
            />
          </div>
        </div>

        <div className="elephanta-description-container md:w-2/3 bg-gray-300 rounded-md p-4 md:p-8 text-black">
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">About Elephanta</h3>
          <p className="text-xs md:text-sm mb-4">
            Welcome to our advanced networking solutions on Elephanta. We specialize in crafting a high-tech cable system, with a focus on top-notch passive products for seamless data transmission. Our quality cables and passive components ensure reliability and optimal performance. While our strength lies in passives, we also integrate active elements for enhanced connectivity. At <b>VINR ENTERPRISES</b>, we're dedicated to creating a robust and adaptive network. Explore our range to experience the future of connectivity. Contact us for inquiries and more information.
          </p>

          <ul className="list-disc text-xs md:text-sm pl-4 md:pl-6 py-2">
            <li>
              Our commitment to innovation and excellence drives us to manufacture products that not only meet but exceed industry expectations.
            </li>
            <li>
              The Elephanta product line is engineered to cater to the evolving needs of our customers, providing reliable and efficient solutions for networking infrastructure.
            </li>
            <li>
              At Elephanta, we take pride in our dedication to quality assurance and reliability.
            </li>
            <li>
              Our mission is to make a lasting impact in the world of technology by delivering products that empower businesses and individuals to thrive in the digital age.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ElephantaBrandComponent;
