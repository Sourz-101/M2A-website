import React from "react";
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#ededed] border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
          <a href="#" className="flex items-center rtl:space-x-reverse">
            <img src="M2ALogo.png" className="h-9" alt="M2A Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap ">
              Made 2 Automate
            </span>
          </a>

          {/* Searchbar */}
          <div className="hidden md:flex p-2 mx-auto rounded-md bg-background-0 items-center ring-1 ring-slate-400">
            <input
              type="text"
              // value={searchTerm}
              // onChange={handlechange}
              className="bg-transparent border-none w-full lg:w-64 focus:outline-none focus:border-none ml-2 caret-slate-500"
              placeholder="search"
            />
            <img src="/Search.png" alt="" className="w-6" />
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {/* Telephone Number */}
            <a
              href="tel:9625356243"
              className="text-md text-black whitespace-nowrap font-semibold hover:underline flex"
            >
              <IoMdCall size={30} />
              +91-9625356243
            </a>

            {/* Cart Icon */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-10"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-md indicator-item">4</span>
              </div>
            </div>

            {/* Profile Picture */}
            <div>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mr-5"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="bg-[#0c9ed9]">
        <div className="max-w-screen-xl px-4 py-2 mx-auto">
          <div className="flex items-center justify-center flex-wrap">
            <ul className="flex flex-row font-medium mt-0 space-x-2 sm:space-x-4 md:space-x-8 lg:space-x-20 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Categroy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Warrenty Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Return & Refund
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
