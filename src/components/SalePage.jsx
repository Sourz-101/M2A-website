import React from "react";

const SalePage = () => {
  return (
    <>
      <div className="flex justify-between mx-auto max-w-screen-xl p-2 mt-10">
        <div className="w-1/5 bg-cyan-400 mt-0">
          <img src="sale20.jpg" alt="Sale banner" />
        </div>

        <div className="w-3/5 flex flex-col mx-4">
          <div className="flex h-1/2 bg-[#88cfec] rounded-2xl mt-3 mb-2">
            <div className="w-1/2 flex justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">SENSOR</p>
                <a
                  href="#"
                  className="px-2 py-1 mt-1 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                >
                  VIEW ALL
                </a>
              </div>
            </div>

            <div className="w-1/2 flex flex-wrap">
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
            </div>
          </div>

          {/* ////////////////////////////////////// */}

          <div className="flex h-1/2 bg-[#88cfec] rounded-2xl mt-3 mb-2">
            <div className="w-1/2 flex justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">Controllers</p>
                <a
                  href="#"
                  className="px-2 py-1 mt-1 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                >
                  VIEW ALL
                </a>
              </div>
            </div>

            <div className="w-1/2 flex flex-wrap">
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="w-5/6 mt-1 p-1"
                  src="sensor.jpg"
                  alt="sensor image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/5 bg-cyan-400 mt-0">
          <img src="sale20.jpg" alt="Sale banner" />
        </div>
      </div>
    </>
  );
};

export default SalePage;
