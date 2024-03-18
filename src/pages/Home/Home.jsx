import top10Img1 from "../../assets/images/top-10(img-1).png";
import top10Img2 from "../../assets/images/top-10(img-2).png";   
import top10Img3 from "../../assets/images/top-10(img-3).png";
import top10Img4 from "../../assets/images/top-10(img-4).png";
import lastSearch1 from "../../assets/images/lastSearch-1.png";
import lastSearch2 from "../../assets/images/lastSearch-2.png";
import lastSearch3 from "../../assets/images/lastSearch-3.png";
import lastSearch4 from "../../assets/images/lastSearch-4.png";
import { FaHome, FaPlus, FaSearch } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";

const Home = () => {
    return (
        <div>
            <div className="flex h-screen bg-gray-800 text-white">
      <div className="w-1/4 p-4">
        {/* First Section */}
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-lg font-bold">Home</span>
          </div>
          <div className="flex items-center mb-4">
            <FaHome className="w-6 h-6 mr-2" />
            <button className="flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg">
              <FaSearch className="w-6 h-6 mr-2" />
              Search
            </button>
          </div>
          <div className="flex items-center">
            <RiLogoutBoxFill  className="w-6 h-6 mr-2" />
            <button className="flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg">
              Log out
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <span className="text-lg font-bold">Your Cookbooks</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPlus className="w-6 h-6 mr-2" />
            <button className="flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg">
              Add Cookbook
            </button>
          </div>
          <div className="flex flex-col">
            <button className="text-white bg-gray-700 px-4 py-2 rounded-lg mb-2">Favourites</button>
            <button className="text-white bg-gray-700 px-4 py-2 rounded-lg mb-2">Book-2</button>
            <button className="text-white bg-gray-700 px-4 py-2 rounded-lg">Book-3</button>
          </div>
        </div>

        {/* Third Section */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-lg font-bold">Your Chefs</span>
          </div>
          <div className="flex flex-col">
            <button className="text-white bg-gray-700 px-4 py-2 rounded-lg mb-2">Chef-1</button>
            <button className="text-white bg-gray-700 px-4 py-2 rounded-lg mb-2">Chef-2</button>
            <button className="text-white bg-gray-700 px-4 py-2 rounded-lg">Chef-3</button>
          </div>
        </div>
      </div>

      <div className="w-3/4 p-4 bg-gray-700">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Home</h1>
        </div>

        {/* Top 10 Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Top 10</h2>
          <div className="flex mt-4">
            <img src={top10Img1} alt="Image 1" className="w-1/4 mr-4" />
            <img src={top10Img2} alt="Image 2" className="w-1/4 mr-4" />
            <img src={top10Img3} alt="Image 3" className="w-1/4 mr-4" />
            <img src={top10Img4} alt="Image 4" className="w-1/4" />
          </div>
        </div>

        {/* Last Search Section */}
        <div>
          <h2 className="text-2xl font-bold">Last Search</h2>
          <div className="flex mt-4">
            <img src={lastSearch1} alt="Image 5" className="w-1/4 mr-4" />
            <img src={lastSearch2} alt="Image 6" className="w-1/4 mr-4" />
            <img src={lastSearch3} alt="Image 7" className="w-1/4 mr-4" />
            <img src={lastSearch4} alt="Image 8" className="w-1/4" />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Home;