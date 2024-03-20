import { FaHome, FaPlus, FaSearch } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { LuChefHat } from "react-icons/lu";
import { BiSolidLogIn } from "react-icons/bi";
import { useState } from "react";

const Main = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Default user is logged in

  // Function to toggle user login status
  const toggleUserLogin = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };
  return (
    <div className="drawer sm:drawer-open md:drawer-open lg:drawer-open bg-[#424242]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side p-2 md:block">
        {" "}
        {/* Show sidebar for md and above */}
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <div className=" bg-[#424242]">
          {/* First Section */}
          <div className="mb-4 p-5 rounded-lg bg-[#1E1C1A]">
            <div className="flex items-center mb-4">
              <h1 className="text-[#BE6F50] text-2xl">Epicure</h1>
            </div>

            <Link to="/">
              <div className="flex items-center mb-4 px-2 bg-[#272727] rounded-lg">
                <FaHome className="w-6 h-6 mr-2 text-[#BE6F50]" />
                <button className="flex items-center text-white px-4 py-2 ">
                  Home
                </button>
              </div>
            </Link>

            <Link to="/search">
              <div className="flex items-center mb-4 px-2 bg-[#272727] rounded-lg">
                <FaSearch className="w-6 h-6 mr-2 text-[#BE6F50]" />
                <button className="flex items-center text-white bg-[#272727] px-4 py-2 rounded-lg">
                  Search
                </button>
              </div>
            </Link>

            <div className="flex items-center mb-4 px-2 bg-[#272727] rounded-lg">
              {/* Other content */}
              {/* Render login/logout button */}
              <div className="flex items-center px-2 bg-[#272727] rounded-lg">
                {/* Function to render login or logout button based on user login status */}
                {isUserLoggedIn ? (
                  // User is logged in, render logout button
                  <div className="flex justify-center items-center">
                    <RiLogoutBoxFill className="w-6 h-6 mr-2 text-[#BE6F50]" />
                    <button className="flex items-center text-white bg-[#272727] px-4 py-2 rounded-lg">
                      Log out
                    </button>
                  </div>
                ) : (
                  // User is not logged in, render login button
                  <div className="flex justify-center items-center">
                    <BiSolidLogIn className="w-6 h-6 mr-2 text-[#BE6F50]" />
                    <Link to="/login"><button className="flex items-center text-white bg-[#272727] px-4 py-2 rounded-lg">
                      LogIn
                    </button></Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="mb-4 md:h-[371px] p-5 rounded-lg bg-[#1E1C1A]">
            <div className="flex items-center mb-4 gap-5 text-white">
              <div className="flex gap-2 items-center">
                <ImBooks className="text-xl text-[#BE6F50]" />
                <span className="text-[18px] font-bold">Your Cookbooks</span>
              </div>
              <FaPlus className="w-6 h-6 mr-2" />
            </div>
            <div className="flex items-center mb-4">
              <button className="flex items-center text-white bg-[#272727] px-4 py-2 rounded-lg">
                Add Cookbook
              </button>
            </div>
            <div className="flex flex-col">
              <button className="text-white bg-[#272727] px-4 py-2 rounded-lg mb-2">
                favorites
              </button>
              <button className="text-white bg-[#272727] px-4 py-2 rounded-lg mb-2">
                Book-2
              </button>
              <button className="text-white bg-[#272727] px-4 py-2 rounded-lg">
                Book-3
              </button>
            </div>
          </div>

          {/* Third Section */}
          <div className="p-5 rounded-lg bg-[#1E1C1A]">
            <div className="flex gap-2 items-center mb-4 ">
              <LuChefHat className="text-[#BE6F50] text-xl" />
              <span className="text-lg font-bold text-white">Your Chefs</span>
            </div>
            <div className="flex flex-col">
              <button className="text-white bg-[#272727] px-4 py-2 rounded-lg mb-2">
                Chef-1
              </button>
              <button className="text-white bg-[#272727] px-4 py-2 rounded-lg mb-2">
                Chef-2
              </button>
              <button className="text-white bg-[#272727] px-4 py-2 rounded-lg">
                Chef-3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
