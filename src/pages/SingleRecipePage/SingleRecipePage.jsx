import { useState, useEffect } from "react";
import pastaImg from "../../assets/images/top-10(img-2).png";
import { FiDownload } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";
import About from "./About/About";
import Ingredients from "./Ingredients/Ingredients";
import Steps from "./Steps/Steps";
import Premium from "./Premium/Premium";

const SingleRecipePage = () => {
  const [activeFilter, setActiveFilter] = useState("About");
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateContainerHeight = () => {
      const windowHeight = window.innerHeight;
      const headerHeight = document.getElementById("header")?.offsetHeight || 0;
      const newContainerHeight = windowHeight - headerHeight;
      setContainerHeight(newContainerHeight);
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);

    return () => window.removeEventListener("resize", updateContainerHeight);
  }, []);

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
        return '';
    }
  };

  return (
    <div className="h-full rounded-lg bg-[#1E1C1A] overflow-hidden">
      {/* Header Part */}
      <div className="relative flex flex-col justify-center w-full" id="header" style={{ height: "180px" }}>
        {/* Adjust height according to your design */}
        <div className="absolute bottom-5 left-5 flex">
          <img src={pastaImg} alt="" className="w-20 h-20 lg:w-30 lg:h-30"/>
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

      <div className="overflow-y-auto" style={{ height: containerHeight }}>
        {/* Filter menu */}
        <div className="flex flex-col items-center">
          <div className="overflow-x-auto max-w-[80%] scrollbar-none lg:block ">
            <div className="flex  text-white gap-10 px-3 lg:px-0">
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
