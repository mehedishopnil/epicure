import { useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaHome, FaSearch, FaPlus } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { LuChefHat } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";
import MobileMenu from "../pages/MobileMenu/MobileMenu";

const Main = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Default user is logged in

  // Function to toggle user login status
  const toggleUserLogin = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  return (
    <div className="h-screen bg-[#424242]">
       {/* Mobile Menu */}
       <div className="max-h-full sm:hidden md:hidden lg:hidden">
          <MobileMenu />
        </div>
      {/* Main Container */}
      <div className="flex w-full h-full overflow-hidden">
        
        {/* Sidebar */}
        <div className="hidden sm:w-[290px] md:w-[300px] lg:w-[334px] sm:block md:block lg:block bg-[#424242] overflow-y-auto">
          <div className="h-full grid grid-rows-8 gap-2 p-2">

            <div className="row-span-2 bg-[#1E1C1A] rounded-lg py-3 px-4">
              {/* Logo */}
            <div className="flex items-center mb-2">
              <h1 className="text-[#BE6F50] text-[22px]">Epicure</h1>
            </div>
            
            {/* Sidebar Links */}
            <Link to="/">
              <div className="flex items-center px-2">
                <FaHome className="w-5 h-5 mr-2 text-[#BE6F50]" />
                <h1 className="flex items-center text-white px-4 py-1">Home</h1>
              </div>
            </Link>
            <Link to="/search">
              <div className="flex items-center px-2">
                <FaSearch className="w-5 h-5 mr-2 text-[#BE6F50]" />
                <h1 className="flex items-center text-white px-4 py-1">Search</h1>
              </div>
            </Link>
            
            {/* Login/Logout Button */}
            <div className="flex items-center px-2">
              {isUserLoggedIn ? (
                <div className="flex justify-center items-center">
                  <RiLogoutBoxFill className="w-5 h-5 mr-2 text-[#BE6F50]" />
                  <button className="flex items-center text-white px-4 py-1">Log out</button>
                </div>
              ) : (
                <div className="flex justify-center items-center">
                  <BiSolidLogIn className="w-5 h-5 text-[#BE6F50]" />
                  <Link to="/login">
                    <h1 className="flex items-center text-white ml-2 px-4 py-1 rounded-lg">LogIn</h1>
                  </Link>
                </div>
              )}
            </div>
            </div>
            
            {/* Your Cookbooks Section */}
            <div className="row-span-3 w-full bg-[#1E1C1A] rounded-lg py-5 px-4">
            <div className="flex items-center mb-4 gap-5 text-white">
              <Link to="/cook_books">
              <div className="flex gap-2 items-center">
                <ImBooks className="text-xl text-[#BE6F50]" />
                <span className="text-[18px] font-bold">Your Cookbooks</span>
              </div>
              </Link>
              <FaPlus className="w-5 h-5" />
            </div>
            
            {/* Scrollable Container for Cookbooks */}
            
            <div className="overflow-y-scroll max-h-[70%]  scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-800">
              <div className="flex flex-col gap-3">
                <Link to="/cook_books" className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg flex items-center justify-center">
                  favorites
                </Link>
                <Link to="/cook_books" className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg flex items-center justify-center">
                  Book-2
                </Link>
                <Link to="/cook_books" className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg flex items-center justify-center">
                  Book-3
                </Link>
                <Link to="/cook_books" className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg flex items-center justify-center">
                  Book-3
                </Link>
                <Link to="/cook_books" className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg flex items-center justify-center">
                  Book-3
                </Link>
                <Link to="/cook_books" className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg flex items-center justify-center">
                  Book-3
                </Link>
                <Link to="/cook_books" className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg flex items-center justify-center">
                  Book-3
                </Link>
                {/* Additional Book Buttons */}
              </div>
            </div>
            </div>
            
            {/* Your Chefs Section */}
            <div className="row-span-3 w-full bg-[#1E1C1A] rounded-lg py-5 px-4">
            <div className="flex gap-2 items-center mb-4">
              <LuChefHat className="text-[#BE6F50] text-xl" />
              <span className="text-lg font-bold text-white">Your Chefs</span>
            </div>
            
            {/* Scrollable Container for Chefs */}
            <div className="overflow-y-auto max-h-[80%] scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-800">
              <div className="flex flex-col gap-3">
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-1</button>
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-2</button>
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-2</button>
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-2</button>
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-2</button>
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-2</button>
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-2</button>
                <button type="button" className="text-white bg-[#272727] px-4 rounded-lg">Chef-2</button>
                {/* Additional Chef Buttons */}
              </div>
            </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full h-full py-3 bg-[#424242]">
          <Outlet />
        </div>
        
      </div>
     
    </div>
  );
};

export default Main;
