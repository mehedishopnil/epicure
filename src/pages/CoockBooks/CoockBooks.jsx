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
        <div className="w-full h-screen rounded-lg">
      <div className="h-full rounded-lg bg-[#1E1C1A]">
        <PageHeader HeaderName="Book-1" />
        {/* This two section should be scrollable */}
        <div
          className=" grid grid-rows-2 
          text-white text-lg px-10 lg:gap-10"
        >
          {/* Top 10 Section */}
          <div className="row-span-1  mb-4">
            <div className="grid grid-cols-2  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-y-10  mt-4">
              <Link to="/single_recipe">
                <img
                  src={top10Img1}
                  alt="Image 1"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img2}
                  alt="Image 2"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img3}
                  alt="Image 3"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img4}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px] "
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
              </Link>
              <Link to="/single_recipe">
                <img
                  src={top10Img5}
                  alt="Image 4"
                  className="w-[103px] h-[98px] sm:w-[133px] sm:h-[128px] md:w-[133px] md:h-[128px] lg:w-[133px] lg:h-[128px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CoockBooks;