const Pricing = () => {
  return (
    <div className="h-screen bg-[#eef2ff]">
      <div className="flex flex-col ml-4 mr-4  h-full items-center justify-center">
        <h1 className="text-[#091133] mb-3  text-center leading-[48px] md:text-[36px] text-[25px] font-medium ">
          A price to suit everyone
        </h1>
        <p className="md:text-[16px] mb-3 text-[#6F7CB2] font-normal leading-[26px] md:w-[540px]  md:text-center text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </p>
        <span className="text-[#222F65]  text-center leading-[48px] md:text-[36px] text-[25px] font-medium ">
          $40
        </span>
        <span className="text-[#37447E]">UI Design Kit</span>

        <div className="flex flex-col items-center justify-center mt-10">
          <p className="text-[#6F7CB2]">See, One price. Simple.</p>
          <button className="bg-[#111B47] mt-3 w-[150px] h-[32px] rounded-md">
            <span className="text-white">Purchase Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
