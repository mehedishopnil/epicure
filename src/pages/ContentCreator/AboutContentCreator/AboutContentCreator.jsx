import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddRecipe from "../AddRecipe/AddRecipe"; // Import the AddRecipe component
import Pasta_1 from "../../../assets/images/Pasta-1.png";
import Pasta_2 from "../../../assets/images/Pasta-2.png";
import Pasta_3 from "../../../assets/images/Pasta-3.png";
import Pasta_4 from "../../../assets/images/Pasta-4.png";

const AboutContentCreator = () => {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const handleAddRecipeClick = () => {
    setShowAddRecipe(true);
  };

  return (
    <div className="container mx-auto overflow-y-auto md:h-[400px]: lg:h-[500px] scrollbar-none">
      {/* Conditional rendering based on showAddRecipe state */}
      {!showAddRecipe && (
        <>
          {/* About Section */}
          <h1 className="text-[#D9D9D9] text-3xl mb-5">About Daniel</h1>
          <div className="">
            {/* Bio */}
            <p className="text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px] p-3 rounded-lg text-[#666666] bg-[#272727] ">
              "Daniel Amit, an innovative chef specializing in pasta, blends
              traditional Italian recipes with modern flair. Inspired by his
              grandmother's kitchen, Daniel shares his passion through a popular
              blog and social media, offering tantalizing recipes and culinary
              insights. When not cooking up a storm, he enjoys exploring local
              markets and leisurely bike rides."
            </p>

            {/* My Recipes Section */}
            <div className="mt-5">
              <div className="flex justify-between items-center">
                {/* My Recipes Heading */}
                <h1 className="text-[#D9D9D9] text-xl ml-10 my-5">My Recipes</h1>
                {/* Add Recipe Button */}
                <button onClick={handleAddRecipeClick}>
                  <IoMdAdd className="text-4xl text-white " />
                </button>
              </div>
              {/* Recipes Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 mt-5">
                {/* Recipe Cards */}
                <div className="flex flex-col justify-center items-center text-white">
                  <img src={Pasta_1} alt="" className="w-8/12" />
                  <p className="text-xl mt-2">PAD KAPAHO</p>
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                  <img src={Pasta_2} alt="" className="w-8/12" />
                  <p className="text-xl mt-2">PAD KAPAHO</p>
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                  <img src={Pasta_3} alt="" className="w-8/12" />
                  <p className="text-xl mt-2">PAD KAPAHO</p>
                </div>
                <div className="flex flex-col justify-center items-center text-white">
                  <img src={Pasta_4} alt="" className="w-8/12" />
                  <p className="text-xl mt-2">PAD KAPAHO</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Add Recipe Component */}
      {showAddRecipe && <AddRecipe />}
    </div>
  );
};

export default AboutContentCreator;
