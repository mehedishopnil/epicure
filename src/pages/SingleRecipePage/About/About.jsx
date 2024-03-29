import Pasta_1 from "../../../assets/images/Pasta-1.png";
import Pasta_2 from "../../../assets/images/Pasta-1.png";
import Pasta_3 from "../../../assets/images/Pasta-1.png";
import Pasta_4 from "../../../assets/images/Pasta-1.png";

const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-[#D9D9D9] text-3xl mb-5">About</h1>
      <div className="overflow-y-auto h-[400px] scrollbar-none">
      <p className="text-[14px] sm:text-[18px] md:text-[18px] lg:text-[18px] p-3 rounded-lg text-[#666666] bg-[#272727] ">
        Savor the artistry in every bite with my handmade Pasta Rose – a
        culinary masterpiece born from a passion for pasta. The meticulously
        crafted petals unfold like a blooming rose, turning a simple meal into a
        visual and gastronomic sensation. Join me on this journey of taste and
        aesthetics with my Pasta Rose – a celebration of love, creativity, and
        the joy of cooking! ✨👩‍
      </p>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 mt-5">
        <img src={Pasta_1} alt="" className="w-10/12"/>
        <img src={Pasta_2} alt="" className="w-10/12"/>
        <img src={Pasta_3} alt="" className="w-10/12"/>
        <img src={Pasta_4} alt="" className="w-10/12"/>
      </div>
      </div>
    </div>
  );
};

export default About;
