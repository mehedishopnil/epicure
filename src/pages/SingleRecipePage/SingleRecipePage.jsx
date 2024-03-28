import pastaImg from "../../assets/images/top-10(img-2).png";
import { FiDownload } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";

const SingleRecipePage = () => {
  return (
    <div>
      <div className="relative flex  w-full h-[200px] lg:h-[321px] rounded-lg bg-gradient-to-b from-[#768895] mb-5">
        <div className="absolute flex  bottom-[10%] left-[10%] sm:left-[4%]  md:left-[4%] lg:left-[4%]">
          <div className="flex">
            <img src={pastaImg} alt="" />
            <div className="flex flex-col justify-center ml-4">
              <h1 className="text-4xl text-white">Pasta Rose</h1>
              <p className="text-lg text-[#8F8F8F]">Daniel Amit</p>
            </div>
          </div>
        </div>

        <div className="absolute text-3xl text-white  flex gap-5 right-[5%] bottom-[10%]">
            <FiDownload />
            <AiFillLike />
          </div>
      </div>

      
    </div>
  );
};

export default SingleRecipePage;
