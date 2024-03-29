import { useState } from "react";
import pastaImg from "../../assets/images/top-10(img-2).png";
import { FiDownload } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";
import About from "./About/About";
import Ingredients from "./Ingredients/Ingredients";
import Steps from "./Steps/Steps";
import Premium from "./Premium/Premium";

const SingleRecipePage = () => {
  const [activeFilter, setActiveFilter] = useState("About");

  const renderComponent = () => {
    switch (activeFilter) {
      case "About":
        return <About />;
      case "Ingredients":
        return <Ingredients />;
      case "Steps":
        return <Steps />;
      case "Premium":
        return <Premium />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-[#1E1C1A]">
      <div className="relative">
        <div className="flex flex-col justify-center items-center w-full h-[200px] lg:h-[260px] rounded-lg bg-gradient-to-b from-[#768895] mb-5">
          <div className="flex">
            <img src={pastaImg} alt="" className="w-20 h-20 lg:w-40 lg:h-40" />
            <div className="flex flex-col justify-center ml-4">
              <h1 className="text-2xl lg:text-4xl text-white">Pasta Rose</h1>
              <p className="text-lg lg:text-xl text-[#8F8F8F]">Daniel Amit</p>
            </div>
          </div>
          <div className="absolute flex gap-5 right-5 bottom-5 lg:right-[5%] lg:bottom-[10%] text-white">
            <FiDownload className="text-3xl" />
            <AiFillLike className="text-3xl" />
          </div>
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
                  activeFilter === "Ingredients" ? "bg-[#BE6F50]" : "bg-[#272727]"
                }`}
                onClick={() => setActiveFilter("Ingredients")}
              >
                Ingredients
              </button>
              <button
                className={`px-3 lg:px-5 py-2 rounded-full ${
                  activeFilter === "Steps" ? "bg-[#BE6F50]" : "bg-[#272727]"
                }`}
                onClick={() => setActiveFilter("Steps")}
              >
                Steps
              </button>
              <button
                className={`px-3 lg:px-5 py-2 rounded-full ${
                  activeFilter === "Premium" ? "bg-[#BE6F50]" : "bg-[#272727]"
                }`}
                onClick={() => setActiveFilter("Premium")}
              >
                Premium
              </button>
            </div>
          </div>
          <div className="w-10/12 mx-auto my-5 border-b border-[#8F8F8F]"></div>
        </div>

        {/* Render selected component */}
        <div className="p-5 mx-3 lg:mx-10">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipePage;
