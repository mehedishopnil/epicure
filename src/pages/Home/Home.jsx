import top10Img1 from "../../assets/images/top-10(img-1).png";
import top10Img2 from "../../assets/images/top-10(img-2).png";
import top10Img3 from "../../assets/images/top-10(img-3).png";
import top10Img4 from "../../assets/images/top-10(img-4).png";
import top10Img5 from "../../assets/images/top-10(img-5).png";
import lastSearch1 from "../../assets/images/lastSearch-1.png";
import lastSearch2 from "../../assets/images/lastSearch-2.png";
import lastSearch3 from "../../assets/images/lastSearch-3.png";
import lastSearch4 from "../../assets/images/lastSearch-4.png";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full rounded-lg">
      <div className="h-full grid grid-row-10 rounded-lg bg-[#1E1C1A]">
        <div className="row-span-2">
          <PageHeader HeaderName="Home" />
          </div>
        {/* This two section should be scrollable */}
        <div
          className=" grid grid-rows-2 row-span-8 bg-[#1E1C1A]
          text-white text-lg px-10 rounded-lg lg:gap-10"
        >
          {/* Top 10 Section */}
          <div className=" row-span-1 grid grid-cols-1 justify-start  mb-4">
            <h2 className="text-[30.67px] font-bold text-white">Top 10</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5   mt-4">
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>

              
            </div>
          </div>

          {/* Last Search Section */}
          <div className="row-span-1 mb-4">
            <h2 className="text-[30.67px] font-bold text-white">Last Search</h2>
            <div className="grid grid-cols-2 overflow-y-auto md:max-h-[40%] lg:max-h-[80%] sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5  mt-4">
  
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            <Link to="/single_recipe" className="flex flex-col items-start">
                <div className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] mr-4"
                />
                <h1 className=" text-lg  mt-2">Pasta Rose</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
