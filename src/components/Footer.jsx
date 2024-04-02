import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#003987] mt-14 pb-14">
      <div className="mx-auto max-w-screen-xl text-white flex">

        {/* left box start */}
        <div className="flex flex-col mx-28 mt-16 w-1/2">
          <div className="flex">
            <img
              src="M2ALogo.png"
              alt="website logo"
              className="bg-white w-16 rounded-lg px-2 py-2"
            />
            <p className="text-xl my-auto ms-5 font-semibold">Made 2 Automate</p>
          </div>

          <p className="text-sm mt-3">official@made2automate.com</p>
          <p className="text-sm">+91-9625356243</p>

          <p className="mt-16 text-sm">4th Floor, Nsut Mgmt. Dept</p>
          <p className="text-sm">Mon - sat : 9:00 AM - 6:00 PM</p>
          <br />
          <p className="text-sm">©2024-2025</p>
        </div>

        {/* Right Box Started */}

        <div className="w-2/3 mt-16 flex">
        {/* My Account */}
          <div className="w-1/3 flex flex-col">
            <p className="font-semibold">My Account</p>
            <br />

            <a href="#" className="text-sm mt-3">Sign in</a>
            <a href="#" className="text-sm mt-3">View Cart</a>
            <a href="#" className="text-sm mt-3">My Wishlist</a>
            <a href="#" className="text-sm mt-3">Track Order</a>
            <a href="#" className="text-sm mt-3">Order History</a>
          </div>
          
          {/* Menus */}
          <div className="w-1/3 flex flex-col">
            <p className="font-semibold">Menus</p>
            <br />
            <a href="#" className="text-sm mt-3">Home</a>
            <a href="#" className="text-sm mt-3">Products</a>
            <a href="#" className="text-sm mt-3">Blogs</a>
            <a href="#" className="text-sm mt-3">About Us</a>
          </div>
          
          {/* Categories */}
          <div className="w-1/3 flex flex-col">
            <p className="font-semibold">Categories</p>
            <br />
            <a href="#" className="text-sm mt-3">Sensors</a>
            <a href="#" className="text-sm mt-3">Controllers</a>
            <a href="#" className="text-sm mt-3">Switch Gears</a>
            <a href="#" className="text-sm mt-3">Switch Gears</a>
            <a href="#" className="text-sm mt-3">Accessories</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
