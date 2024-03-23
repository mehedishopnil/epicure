import { useState } from "react";
import { BiSolidLogIn } from "react-icons/bi";
import { FaHome, FaPlus, FaSearch } from "react-icons/fa";
import { ImBook, ImBooks } from "react-icons/im";
import { LuChefHat } from "react-icons/lu";
import { RiMenuLine, RiCloseLine, RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle user login status
  const toggleUserLogin = () => {
    setIsUserLoggedIn(!isUserLoggedIn);
  };

  return (
    <div className="sm:hidden md:hidden lg:hidden relative  bg-gray-800">
      <nav className="flex justify-between items-center p-4 bg-gray-900">
        <h1 className="text-[#BE6F50] text-[22px]">Epicure</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <RiCloseLine className="text-white text-3xl" />
            ) : (
              <RiMenuLine className="text-white text-3xl" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-20">
          {/* Sidebar content here */}
          <div className="bg-[#424242] w-full mx-5 p-4 rounded-lg">
            
            <div className="flex flex-col gap-3 bg-[#424242]">
              {/* First Section */}
              <div className=" p-4 rounded-lg bg-[#1E1C1A]">
                <div className="flex items-center mb-2">
                  <h1 className="text-[#BE6F50] text-[22px]">Epicure</h1>
                </div>

                <Link to="/">
                  <div className="flex items-center  px-2 ">
                    <FaHome className="w-5 h-5 mr-2 text-[#BE6F50]" />
                    <h1 className="flex items-center text-white px-4 py-1 ">
                      Home
                    </h1>
                  </div>
                </Link>

                <Link to="/search">
                  <div className="flex items-center  px-2 ">
                    <FaSearch className="w-5 h-5 mr-2 text-[#BE6F50]" />
                    <h1 className="flex items-center text-white px-4 py-1 ">
                      Search
                    </h1>
                  </div>
                </Link>

                <div className="flex items-center  px-2 ">
                  {/* Other content */}
                  {/* Render login/logout button */}
                  <div className="flex items-center ">
                    {/* Function to render login or logout button based on user login status */}
                    {isUserLoggedIn ? (
                      // User is logged in, render logout button
                      <div className="flex justify-center items-center">
                        <RiLogoutBoxFill className="w-5 h-5 mr-2 text-[#BE6F50]" />
                        <button className="flex items-center text-white px-4 py-1 ">
                          Log out
                        </button>
                      </div>
                    ) : (
                      // User is not logged in, render login button
                      <div className="flex justify-center items-center">
                        <BiSolidLogIn className="w-5 h-5  text-[#BE6F50]" />
                        <Link to="/login">
                          <h1 className="flex items-center text-white ml-2 px-4 py-1 rounded-lg">
                            LogIn
                          </h1>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Second Section */}
              <div className="p-4 rounded-lg bg-[#1E1C1A]">
                <div className="flex items-center mb-4 gap-5 text-white">
                  <div className="flex gap-2 items-center">
                    <ImBooks className="text-xl text-[#BE6F50]" />
                    <span className="text-[18px] font-bold">
                      Your Cookbooks
                    </span>
                  </div>
                  <FaPlus className="w-5 h-5" />
                </div>
                {/* Scrollable container */}
                <div className="overflow-y-scroll max-h-[210px] pr-3 scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-800">
                  <div className="flex flex-col gap-3">
                    {/* Book buttons */}
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      favorites
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-2
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-3
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-4
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-5
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-6
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-7
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-8
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg drop-shadow-lg">
                      Book-8
                    </button>
                  </div>
                </div>
              </div>

              {/* Third Section */}
              <div className="max-h-full p-5 mb-5 rounded-lg bg-[#1E1C1A]">
                <div className="flex gap-2 items-center mb-4">
                  <LuChefHat className="text-[#BE6F50] text-xl" />
                  <span className="text-lg font-bold text-white">
                    Your Chefs
                  </span>
                </div>
                {/* Scrollable container */}
                <div className="overflow-y-auto max-h-[220px] pr-2 scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-800">
                  <div className="flex flex-col gap-3">
                    {/* Chef buttons */}
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-1
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-2
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-3
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-4
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-6
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-7
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-7
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-7
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-7
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-7
                    </button>
                    <button className="text-white bg-[#272727] px-4 rounded-lg">
                      Chef-7
                    </button>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
