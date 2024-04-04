import top10Img1 from "../../assets/images/top-10(img-1).png";
import top10Img2 from "../../assets/images/top-10(img-2).png";
import top10Img3 from "../../assets/images/top-10(img-3).png";
import top10Img4 from "../../assets/images/top-10(img-4).png";
import top10Img5 from "../../assets/images/top-10(img-5).png";
import lastSearch1 from "../../assets/images/lastSearch-1.png";
import lastSearch2 from "../../assets/images/lastSearch-2.png";
import lastSearch3 from "../../assets/images/lastSearch-3.png";
import lastSearch4 from "../../assets/images/lastSearch-4.png";
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader/PageHeader";

const CoockBooks = () => {
    return (
        <div className="w-full h-full rounded-lg">
      <div className="h-full grid grid-row-10 rounded-lg bg-[#1E1C1A]">
        <div className="row-span-2">
        <PageHeader HeaderName="Book-1" />
        </div>

        {/* This two section should be scrollable */}
        <div
          className="row-span-8 overflow-y-auto scrollbar-none"
        >     
            <div className="grid grid-cols-2 text-white  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-y-10  mt-4">
              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>

              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img2}
                  alt="Image 2"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>

              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img3}
                  alt="Image 3"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>

              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img4}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>
              
              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>
              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>

              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>

              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>

              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>

              <Link to="/single_recipe" className="flex flex-col items-center">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
                <h1 className="text-center text-lg mt-2">Pasta Rose</h1>
              </Link>
            </div>
        </div>
      </div>
    </div>
    );
};

export default CoockBooks;