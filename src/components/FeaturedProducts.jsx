import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-2 mt-5">
      {/* Heading */}
      <h2 className="self-center text-4xl font-semibold whitespace-nowrap mb-10">
        Featured Products
      </h2>

      {/* Product cards */}
      <div className="flex flex-wrap item-center justify-between">

        {/* card 1 */}
        <div className="max-w-60 rounded-none">
          <a href="#">
            <img
              src="sensor.jpg"
              alt="sensor image"
            />
          </a>
          <div className="pt-2">
            <a href="#">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
              Automatic Sheet Measurement
              </h5>
            </a>
            
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Buy Now

            </a>
          </div>
        </div>

      {/* Card 2 */}
        <div className="max-w-60 rounded-none">
          <a href="#">
            <img
              src="sensor.jpg"
              alt="sensor image"
            />
          </a>
          <div className="pt-2">
            <a href="#">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
              Automatic Sheet Measurement
              </h5>
            </a>
            
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Buy Now

            </a>
          </div>
        </div>

        <div className="max-w-60 rounded-none">
          <a href="#">
            <img
              src="sensor.jpg"
              alt="sensor image"
            />
          </a>
          <div className="pt-2">
            <a href="#">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
              Automatic Sheet Measurement
              </h5>
            </a>
            
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Buy Now

            </a>
          </div>
        </div>

        <div className="max-w-60 rounded-none">
          <a href="#">
            <img
              src="sensor.jpg"
              alt="sensor image"
            />
          </a>
          <div className="pt-2">
            <a href="#">
              <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
              Automatic Sheet Measurement
              </h5>
            </a>
            
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Buy Now

            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedProducts;
