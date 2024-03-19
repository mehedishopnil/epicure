import top10Img1 from "../../assets/images/top-10(img-1).png";
import top10Img2 from "../../assets/images/top-10(img-2).png";
import top10Img3 from "../../assets/images/top-10(img-3).png";
import top10Img4 from "../../assets/images/top-10(img-4).png";
import lastSearch1 from "../../assets/images/lastSearch-1.png";
import lastSearch2 from "../../assets/images/lastSearch-2.png";
import lastSearch3 from "../../assets/images/lastSearch-3.png";
import lastSearch4 from "../../assets/images/lastSearch-4.png"; 


const Home = () => {
  return (
    <div className="w-full h-full my-2 rounded-lg">
      <div className="w-full h-full p-10 bg-[#272727]">
          <div className="relative w-full h-[209px] rounded-lg bg-gradient-to-b from-[#768895] mb-8">
            <h1 className="absolute bottom-[20%] left-[5%] text-4xl font-bold text-white">Home</h1>
          </div>

          <div className=" text-white text-lg ml-16  ">
            {/* Top 10 Section */}
          <div className="mb-8">
            <h2 className="text-[30.67px] font-bold text-white">Top 10</h2>
            <div className="flex gap-10  mt-4">
              <img src={top10Img1} alt="Image 1" className="w-[133px] h-[128px] mr-4" />
              <img src={top10Img2} alt="Image 2" className="w-[133px] h-[128px] mr-4" />
              <img src={top10Img3} alt="Image 3" className="w-[133px] h-[128px] mr-4" />
              <img src={top10Img4} alt="Image 4" className="w-[133px] h-[128px]" />
            </div>
          </div>

          {/* Last Search Section */}
          <div className="mt-[160px]">
            <h2 className="text-[30.67px] font-bold text-white">Last Search</h2>
            <div className="flex gap-10 mt-4">
              <img src={lastSearch1} alt="Image 5" className="w-[133px] h-[128px] mr-4" />
              <img src={lastSearch2} alt="Image 6" className="w-[133px] h-[128px] mr-4" />
              <img src={lastSearch3} alt="Image 7" className="w-[133px] h-[128px] mr-4" />
              <img src={lastSearch4} alt="Image 8" className="w-[133px] h-[128px]" />
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
