import top10Img1 from "../../assets/images/top-10(img-1).png";
import top10Img2 from "../../assets/images/top-10(img-2).png";
import top10Img3 from "../../assets/images/top-10(img-3).png";
import top10Img4 from "../../assets/images/top-10(img-4).png";
import top10Img5 from "../../assets/images/top-10(img-5).png";
import lastSearch1 from "../../assets/images/lastSearch-1.png";
import lastSearch2 from "../../assets/images/lastSearch-2.png";
import lastSearch3 from "../../assets/images/lastSearch-3.png";
import lastSearch4 from "../../assets/images/lastSearch-4.png";

const Home = () => {
  return (
    <div className="w-full h-screen  my-2 rounded-lg">
      <div className="h-full rounded-lg bg-[#1E1C1A]">
        <div className="relative w-full h-[200px] lg:h-[200px] rounded-lg bg-gradient-to-b from-[#768895] mb-5">
          <h1 className="absolute bottom-[20%] left-[10%] sm:left-[4%]  md:left-[4%] lg:left-[4%] text-[32.67px] md:text-[42.67px] lg:text-[42.67px] font-bold text-white">
            Home
          </h1>
        </div>
        {/* This two section should be scrollable */}
        <div
          className=" grid grid-rows-2 
          text-white text-lg px-10 lg:gap-10"
        >
          {/* Top 10 Section */}
          <div className="row-span-1  mb-4">
            <h2 className="text-[30.67px] font-bold text-white">Top 10</h2>
            <div className="grid grid-cols-2 overflow-y-auto md:max-h-[40%] lg:max-h-[80%] sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5  mt-4">
              <img
                src={top10Img1}
                alt="Image 1"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={top10Img2}
                alt="Image 2"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={top10Img3}
                alt="Image 3"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={top10Img4}
                alt="Image 4"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={top10Img5}
                alt="Image 4"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
              />
            </div>
          </div>

          {/* Last Search Section */}
          <div className="row-span-1 ">
            <h2 className="text-[30.67px] font-bold text-white">Last Search</h2>
            <div className="grid grid-cols-2 overflow-y-auto md:max-h-[40%] lg:max-h-[80%] sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5 mt-4">
              <img
                src={lastSearch1}
                alt="Image 5"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={lastSearch2}
                alt="Image 6"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={lastSearch3}
                alt="Image 7"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={lastSearch4}
                alt="Image 8"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
              />
              <img
                src={top10Img5}
                alt="Image 4"
                className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
