import top10Img1 from "../../../assets/images/top-10(img-1).png";
import top10Img2 from "../../../assets/images/top-10(img-2).png";
import top10Img3 from "../../../assets/images/top-10(img-3).png";
import top10Img4 from "../../../assets/images/top-10(img-4).png";
import top10Img5 from "../../../assets/images/top-10(img-5).png";
import lastSearch1 from "../../../assets/images/lastSearch-1.png";
import lastSearch2 from "../../../assets/images/lastSearch-2.png";
import lastSearch3 from "../../../assets/images/lastSearch-3.png";
import lastSearch4 from "../../../assets/images/lastSearch-4.png";
import { FaSearch } from "react-icons/fa";

const SearchCC = () => {
    return (
        <div className="overflow-y-auto grid grid-cols-1 items-center lg:max-auto xl:max-w-screen-xl max-h-[400px]  scrollbar-none">

            {/* Search Bar */}
          <div className="flex items-center justify-center mb-10 my-5">
            <div className="flex items-center justify-center w-full h-[50px] rounded-lg px-3 relative">
              <input
                type="text"
                placeholder=""
                className="w-full h-10 px-10 mx-5 py-2 rounded-lg bg-white outline-none"
              />
              <span className="absolute right-[12%] top-0 bottom-0 flex items-center px-2 text-gray-400">
                Search
              </span>
              <div className="absolute top-[50%] right-[8%] transform -translate-y-1/2">
                <FaSearch className="text-2xl text-gray-500" />
              </div>
            </div>
          </div>

            {/* This section should be scrollable */}
            <div className="grid grid-rows-3 overflow-y-auto text-white text-lg px-10 sm:gap-10 lg:gap-10 mb-10">
                {/* tag group 1 */}
                <div className="row-span-1">
                    <h2 className="text-[20px] font-bold text-white">tag group 1</h2>
                    <div className="grid grid-cols-2 scrollbar-thumb-gray-500 scrollbar-track-gray-800 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
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
                <div className="row-span-1">
                    <h2 className="text-[20px] font-bold text-white">tag group 2</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
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
                <div className="row-span-3">
                    <h2 className="text-[20px] font-bold text-white">tag group 3</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4">
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
    );
};

export default SearchCC;
