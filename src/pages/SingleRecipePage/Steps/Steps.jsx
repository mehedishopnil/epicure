

const Steps = () => {
    return (
        <div className="overflow-y-auto max-h-[400px] scrollbar-none">
            <h1 className="text-[30.67px] font-bold text-[#D9D9D9]">Steps</h1>

            <div className="grid grid-cols-6 gap-5 mt-5">
                <div className="w-auto h-[152px] col-span-4 rounded-lg p-3 bg-[#272727]">
                    <h1 className="text-[20px] font-bold text-[#666666]">Step 1</h1>
                </div>
                <div className="col-span-2 rounded-lg p-2 bg-[#272727]">
                </div>
            </div>

            <div className="grid grid-cols-6 gap-5 mt-5">
                <div className="w-auto h-[152px] col-span-4 rounded-lg p-3 bg-[#272727]">
                    <h1 className="text-[20px] font-bold text-[#666666]">Step 2</h1>
                </div>
                <div className="col-span-2 rounded-lg p-2 bg-[#272727]">
                </div>
            </div>

            <div className="grid grid-cols-6 gap-5 mt-5">
                <div className="w-auto h-[152px] col-span-4 rounded-lg p-3 bg-[#272727]">
                    <h1 className="text-[20px] font-bold text-[#666666]">Step 2</h1>
                </div>
                <div className="col-span-2 rounded-lg p-2 bg-[#272727]">
                </div>
            </div>
            
        </div>
    );
};

export default Steps;