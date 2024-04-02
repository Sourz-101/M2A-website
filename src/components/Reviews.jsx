import React from "react";

const Reviews = () => {
  return (
    <div className="mx-auto max-w-screen-xl flex justify-between mt-24">
      {/* Reviews */}
      <div className="w-1/2 rounded-xl bg-[#88cfec] me-3 py-5 px-4 font-semibold flex flex-col">
        <p className="text-2xl mb-7 ms-5">Reviews</p>

        {/* Review Card */}
        <div className="flex bg-[#b6dff5] py-3 rounded-sm mb-5 mx-5">
          <div className="w-14 m-5 mt-1">
            <img
              className="rounded-full aspect-square object-cover"
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>

          <div className="w-full">
            <p className="text-lg">Heading</p>
            <p className="text-sm flex-wrap">
              Best service in India. Genuine part with long life.Very Fast.
            </p>
            <p className="">⭐⭐⭐⭐</p>
          </div>
        </div>

        {/* Review Card */}
        <div className="flex bg-[#b6dff5] py-3 rounded-sm mb-5 mx-5">
          <div className="w-12 m-5 mt-1">
            <img
              className="rounded-full  aspect-square object-cover"
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>

          <div className="w-full">
            <p className="text-lg">Heading</p>
            <p className="text-sm flex-wrap">
              Best service in India. Genuine part with long life. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Itaque, illo.
            </p>
            <p className="">⭐⭐⭐⭐</p>
          </div>
        </div>

        {/* Review Card */}
        <div className="flex bg-[#b6dff5] py-3 rounded-sm mb-5 mx-5">
          <div className="w-12 m-5 mt-1">
            <img
              className="rounded-full  aspect-square object-cover"
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>

          <div className="w-full">
            <p className="text-lg">Heading</p>
            <p className="text-sm flex-wrap">
              Best service in India. Genuine part with long life.Very Fast.
            </p>
            <p className="">⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

      {/* Accordian */}
      <div className="w-1/2 border rounded-xl bg-[#88cfec] ms-4 py-4 px-5 text-xl font-semibold">
        <p className="text-2xl mb-7">FAQ</p>

        <div className="collapse collapse-arrow bg-[#b6dff5] rounded-sm mt-1">
          <input type="radio" name="my-accordion-2" defaultChecked/>
          <div className="collapse-title text-lg font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className="text-base text-gray-600">This is an example of how faq section is going to look in production. This is how it looks like after opening it.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#b6dff5] rounded-sm mt-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className="text-base text-gray-600">This is an example of how faq section is going to look in production. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fugiat!</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#b6dff5] rounded-sm mt-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className="text-base text-gray-600">This is an example of how faq section is going to look in production</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#b6dff5] rounded-sm mt-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p className="text-base text-gray-600">This is an example of how faq section is going to look in production. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fugiat!</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Reviews;
