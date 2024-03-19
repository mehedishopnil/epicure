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
    <div className="w-full h-full my-2 rounded-lg">
      <div className="w-full h-full p-10 bg-[#272727]">
        {/* Search Header */}
        <div className="relative w-full h-[209px] rounded-lg bg-gradient-to-b from-[#768895] mb-8">
          <h1 className="absolute bottom-[20%] left-[5%] text-[42.67px] font-bold text-white">
            Search
          </h1>
        </div>

        <div className="flex flex-col gap-24">
          {/* Search bar */}
          <div className=" ml-16 relative">
            <input
              type="text"
              placeholder=" "
              className="w-[62%] h-10 rounded-lg text-black bg-white bg-transparent border-b-2 border-white outline-none pl-4 pr-10" // Added padding for the icon
            />
            <div className="absolute inset-y-0 right-[40%] flex items-center mr-4">
              <FaSearch className="h-6 w-6 text-gray-400" />
            </div>

            <div className="absolute inset-y-0 right-[45%] flex items-center ml-4 text-gray-400">
              <span>Search</span>
            </div>
          </div>

          {/* image section */}
          <div className="text-white text-lg ml-16">
            <div className="mb-8">
              <div className="flex gap-10 mt-4">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={top10Img2}
                  alt="Image 2"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={top10Img3}
                  alt="Image 3"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={top10Img4}
                  alt="Image 4"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={top10Img5}
                  alt="Image 5"
                  className="w-[133px] h-[128px]"
                />
              </div>
            </div>

            {/* Last Search Images */}
            <div className="mt-[160px]">
              <div className="flex gap-10 mt-4">
                <img
                  src={lastSearch1}
                  alt="Image 6"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={lastSearch2}
                  alt="Image 7"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={lastSearch3}
                  alt="Image 8"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={lastSearch4}
                  alt="Image 9"
                  className="w-[133px] h-[128px] mr-4"
                />
                <img
                  src={top10Img5}
                  alt="Image 10"
                  className="w-[133px] h-[128px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
