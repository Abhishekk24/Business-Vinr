import React from 'react';

const ElephantaBrandComponent = () => {
  return (
    <div className='container mx-auto pb-24 justify-between'>
      <h2 className="section-title pb-12 xl:pb-36 text-center mx-auto ">Elephanta</h2>
      <div className="flex py-1 ">
        <div className="elephanta-logo-container w-1/3 bg-gray-200 text-white p-8 rounded-md mr-8 gap-y-12 xl:gap-y-24 xl:gap-x-8">
          <div className='items-center'>
            <img
              src="/brands/Elephanta.png" // Replace with your actual logo path
              alt="Elephanta Logo"
              className="w-15 h-15 mb-1 pb-12"
            />
          </div>

          {/* <div className='container bg-gray-300  rounded-md text-black p-4'>
            <p className="text-sm">Crafting Innovative Solutions</p>
          </div> */}
        </div>

        <div className="elephanta-description-container w-2/3 bg-gray-300 rounded-md p-8 text-black">
          <h3 className="text-2xl font-bold mb-4">About Elephanta</h3>
          <p className="text-sm">
          Welcome to our advanced networking solutions on Elephanta. We specialize in crafting a high-tech cable system, with a focus on top-notch passive products for seamless data transmission. Our quality cables and passive components ensure reliability and optimal performance. While our strength lies in passives, we also integrate active elements for enhanced connectivity. At <b>VINR ENTERPRISES</b>, we're dedicated to creating a robust and adaptive network. Explore our range to experience the future of connectivity. Contact us for inquiries and more information.
          </p>

          <ul className="list-disc text-sm pl-6 py-2">
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
