import Pasta_1 from "../../../assets/images/Pasta-1.png";
import Pasta_2 from "../../../assets/images/Pasta-2.png";
import Pasta_3 from "../../../assets/images/Pasta-3.png";
import Pasta_4 from "../../../assets/images/Pasta-4.png";

const Steps = () => {
    return (
        <div className="overflow-y-auto max-h-[400px] scrollbar-none">
            <h1 className="text-[30.67px] font-bold text-[#D9D9D9]">Steps</h1>

            {/* Step 1 */}
            <div className="grid grid-cols-6 gap-5 mt-5">
                <div className="w-auto h-[152px] col-span-4 rounded-lg p-3 bg-[#272727]">
                    <h1 className="text-[20px] font-bold text-[#666666]">Step 1</h1>
                    {/* Here I need to add the steps details */}
                    <p className="text-white font-[poppins] ">Boil water in a large pot. Add salt and pasta to the boiling water.</p>
                </div>
                <div className="col-span-2 rounded-lg p-2 bg-[#272727] flex items-center justify-center">
                    <img src={Pasta_1} alt="Step 1" className="w-9/12"/>
                </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-6 gap-5 mt-5">
                <div className="w-auto h-[152px] col-span-4 rounded-lg p-3 bg-[#272727]">
                    <h1 className="text-[20px] font-bold text-[#666666]">Step 2</h1>
                    {/* Here I need to add the steps details */}
                    <p className="text-white font-[poppins] ">Cook pasta until al dente. Drain and set aside.</p>
                </div>
                <div className="col-span-2 rounded-lg p-2 bg-[#272727] flex items-center justify-center">
                    <img src={Pasta_2} alt="Step 2" className="w-9/12"/>
                </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-6 gap-5 mt-5">
                <div className="w-auto h-[152px] col-span-4 rounded-lg p-3 bg-[#272727]">
                    <h1 className="text-[20px] font-bold text-[#666666]">Step 3</h1>
                    {/* Here I need to add the steps details */}
                    <p className="text-white font-[poppins] ">In a pan, heat olive oil and sauté garlic until fragrant. Add chopped tomatoes and cook until soft.</p>
                </div>
                <div className="col-span-2 rounded-lg p-2 bg-[#272727] flex items-center justify-center">
                    <img src={Pasta_3} alt="Step 3" className="w-9/12"/>
                </div>
            </div>
            
            {/* Step 4 */}
            <div className="grid grid-cols-6 gap-5 mb-8 mt-5">
                <div className="w-auto h-[152px] col-span-4 rounded-lg p-3 bg-[#272727]">
                    <h1 className="text-[20px] font-bold text-[#666666]">Step 4</h1>
                    {/* Here I need to add the steps details */}
                    <p className="text-white font-[poppins] ">Add cooked pasta to the tomato sauce. Toss well to coat. Serve hot with grated cheese and garnish with basil leaves.</p>
                </div>
                <div className="col-span-2 rounded-lg p-2 bg-[#272727] flex items-center justify-center">
                    <img src={Pasta_4} alt="Step 4" className="w-9/12"/>
                </div>
            </div>
        </div>
    );
};

export default Steps;
