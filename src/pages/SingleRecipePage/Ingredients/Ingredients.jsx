
import ingredientImg1 from "../../../assets/images/ingredient-img1.png";
import ingredientImg2 from "../../../assets/images/ingredient-img2.png";

const Ingredients = () => {
    return (
        <div>
            <h2 className="text-[30.67px] font-bold text-[#D9D9D9]">Ingredients</h2>

            <div className="flex flex-col gap-3 mt-5">
                <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/2 flex justify-between  items-center  rounded-xl bg-[#272727] px-4 py-2">
                    <div className="flex items-center gap-2">
                    <img src={ingredientImg1} alt="" />
                    <p className="text-[#666666] font-[poppins]">Bread</p>
                    </div>
                    <p className="text-[#A9A9A9] font-[poppins] text-sm">200g</p>
                </div>
                
                <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/2 flex justify-between items-center  rounded-xl bg-[#272727] px-4 py-2">
                    <div className="flex items-center gap-2">
                    <img src={ingredientImg2} alt="" />
                    <p className="text-[#666666] font-[poppins]">Egg</p>
                    </div>
                    <p className="text-[#A9A9A9] font-[poppins] text-sm">200g</p>
                </div>

                <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/2 flex justify-between items-center  rounded-xl bg-[#272727] px-4 py-2">
                    <div className="flex items-center gap-2">
                    <img src={ingredientImg1} alt="" />
                    <p className="text-[#666666] font-[poppins]">Milk</p>
                    </div>
                    <p className="text-[#A9A9A9] font-[poppins] text-sm">200g</p>
                </div>
                
                <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/2 flex justify-between items-center rounded-xl bg-[#272727] px-4 py-2">
                    <div className="flex items-center gap-2">
                    <img src={ingredientImg2} alt="" />
                    <p className="text-[#666666] font-[poppins]">Butter</p>
                    </div>
                    <p className="text-[#A9A9A9] font-[poppins] text-sm">200g</p>
                </div>

            </div>
        </div>
    );
};

export default Ingredients;