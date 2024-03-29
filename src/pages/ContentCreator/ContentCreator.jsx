import { useState } from "react";
import pastaImg from "../../assets/images/top-10(img-2).png";
import { FiDownload } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";
import About from "./AboutContentCreator/AboutContentCreator";
import Search from "../Search/Search";
import Statistics from "./Statistics/Statistics";
import DanielAmit from "../../assets/images/DanielAmit.jpg";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContentCreator = () => {
  const [activeFilter, setActiveFilter] = useState("About");

  const renderComponent = () => {
    switch (activeFilter) {
      case "About":
        return <About />;
      case "Search":
        return <Search />;
      case "Statistics":
        return <Statistics />;
      case "Calender":
        return <ContentCreator />;
      default:
        return null;
    }
  };
  return (
    <div className="h-screen bg-[#1E1C1A]">
      <div className="relative">
        <div
          className="flex flex-col justify-center w-full h-[200px] lg:h-[260px] rounded-lg bg-center bg-no-repeat bg-cover mb-5"
          style={{ backgroundImage: `url(${DanielAmit})` }}
        >
          <div className="absolute bottom-5 left-5 flex">
            <h1 className="text-2xl lg:text-4xl text-white">Daniel Amit</h1>
            
          </div>
          
          <Link ><FaEdit className="absolute text-3xl flex gap-5 right-5 top-5 lg:right-[5%] lg:bottom-[10%] text-white" /></Link>
         
        </div>
      </div>
      <div>
        {/* Filter menu */}
        <div className="flex flex-col items-center">
          <div className="overflow-x-auto max-w-[80%] scrollbar-none lg:block ">
            <div className="flex text-white gap-10 px-3 lg:px-0">
              <button
                className={`px-3 lg:px-5 py-2 rounded-full ${
                  activeFilter === "About" ? "bg-[#BE6F50]" : "bg-[#272727]"
                }`}
                onClick={() => setActiveFilter("About")}
              >
                About
              </button>
              <button
                className={`px-3 lg:px-5 py-2 rounded-full ${
                  activeFilter === "Ingredients"
                    ? "bg-[#BE6F50]"
                    : "bg-[#272727]"
                }`}
                onClick={() => setActiveFilter("Search")}
              >
                Search
              </button>
              <button
                className={`px-3 lg:px-5 py-2 rounded-full ${
                  activeFilter === "Steps" ? "bg-[#BE6F50]" : "bg-[#272727]"
                }`}
                onClick={() => setActiveFilter("Statistics")}
              >
                Statistics
              </button>
              <button
                className={`px-3 lg:px-5 py-2 rounded-full ${
                  activeFilter === "Premium" ? "bg-[#BE6F50]" : "bg-[#272727]"
                }`}
                onClick={() => setActiveFilter("ContentCreator")}
              >
                Calender
              </button>
            </div>
          </div>
          <div className="w-10/12 mx-auto my-5 border-b border-[#8F8F8F]"></div>
        </div>

        {/* Render selected component */}
        <div className="p-5 mx-3 lg:mx-10">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default ContentCreator;
