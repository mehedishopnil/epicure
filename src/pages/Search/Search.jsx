import top10Img1 from "../../assets/images/top-10(img-1).png";
import top10Img2 from "../../assets/images/top-10(img-2).png";
import top10Img3 from "../../assets/images/top-10(img-3).png";
import top10Img4 from "../../assets/images/top-10(img-4).png";
import top10Img5 from "../../assets/images/top-10(img-5).png";
import lastSearch1 from "../../assets/images/lastSearch-1.png";
import lastSearch2 from "../../assets/images/lastSearch-2.png";
import lastSearch3 from "../../assets/images/lastSearch-3.png";
import lastSearch4 from "../../assets/images/lastSearch-4.png";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="w-full h-screen  my-2 rounded-lg">
      <div className="h-full rounded-lg bg-[#1E1C1A]">
        <div className="relative w-full h-[200px] lg:h-[200px] rounded-lg bg-gradient-to-b from-[#768895] mb-5">
          <h1 className="absolute bottom-[20%] left-[10%] sm:left-[4%]  md:left-[4%] lg:left-[4%] text-[32.67px] md:text-[42.67px] lg:text-[42.67px] font-bold text-white">
            Search
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-center my-5">
          <div className="flex items-center justify-center w-full h-[50px] rounded-lg px-3 relative">
            <input
              type="text"
              placeholder="Search for recipes, ingredients, or cooking methods"
              className="w-[90%] h-full px-10 py-2 rounded-full bg-white outline-none"
            />

            <div className="absolute top-[50%] right-[10%] transform -translate-y-1/2">
              <FaSearch className="text-2xl text-gray-500" />
            </div>
          </div>
          </div>


        {/* This three section should be scrollable */}
        <div
          className=" grid grid-rows-3 overflow-y-auto sm:max-h-[90%] md:max-h-[75%] text-white text-lg px-10 sm:gap-10 lg:gap-10"
        >
          {/* tag group 1 */}
          <div className="row-span-1 ">
            <h2 className="text-[20px] font-bold text-white">tag group 1</h2>
            <div className="grid grid-cols-2 overflow-x-auto scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-800 sm:max-h-[60%] md:max-h-[70%] lg:max-h-[80%] sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5  mt-4">
              <img
                src={top10Img1}
                alt="Image 1"
                className="w-[83px] h-[86px] sm:w-[85px] sm:h-[86px] md:w-[85px] md:h-[85px] lg:w-[85px] lg:h-[85px] mr-4"
              />
              <img
                src={top10Img2}
                alt="Image 2"
                className="w-[83px] h-[86px] sm:w-[85px] sm:h-[86px] md:w-[85px] md:h-[85px] lg:w-[85px] lg:h-[85px] mr-4"
              />
              <img
                src={top10Img3}
                alt="Image 3"
                className="w-[83px] h-[86px] sm:w-[85px] sm:h-[86px] md:w-[85px] md:h-[85px] lg:w-[85px] lg:h-[85px] mr-4"
              />
              <img
                src={top10Img4}
                alt="Image 4"
                className="w-[83px] h-[86px] sm:w-[85px] sm:h-[86px] md:w-[85px] md:h-[85px] lg:w-[85px] lg:h-[85px] mr-4"
              />
              <img
                src={top10Img5}
                alt="Image 4"
                className="w-[83px] h-[86px] sm:w-[85px] sm:h-[86px] md:w-[85px] md:h-[85px] lg:w-[85px] lg:h-[85px] mr-4"
              />
            </div>
          </div>

          {/* tag group 2 */}
          <div className="row-span-1 ">
            <h2 className="text-[20px] font-bold text-white">tag group 2</h2>
            <div className="grid grid-cols-2  overflow-y-auto scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-800 sm:max-h-[60%] md:max-h-[70%] lg:max-h-[80%] sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
              <img
                src={lastSearch1}
                alt="Image 5"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={lastSearch2}
                alt="Image 6"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={lastSearch3}
                alt="Image 7"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={lastSearch4}
                alt="Image 8"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={top10Img5}
                alt="Image 4"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
            </div>
          </div>

          {/* tag group 3 */}
          <div className="row-span-3 ">
            <h2 className="text-[20px] font-bold text-white">tag group 3</h2>
            <div className="grid grid-cols-2 overflow-y-auto scrollbar-none scrollbar-thumb-gray-500 scrollbar-track-gray-800 sm:max-h-[60%] md:max-h-[50%] lg:max-h-[80%] sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
              <img
                src={lastSearch1}
                alt="Image 5"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={lastSearch2}
                alt="Image 6"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={lastSearch3}
                alt="Image 7"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={lastSearch4}
                alt="Image 8"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
              <img
                src={top10Img5}
                alt="Image 4"
                className="w-[83px] h-[86px] sm:w-[81px] sm:h-[84px] md:w-[81px] md:h-[83px] lg:w-[81px] lg:h-[83px] mr-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
