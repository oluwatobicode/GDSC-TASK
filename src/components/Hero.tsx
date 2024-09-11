import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="lg:h-screen ml-6 mt-6 ">
      <Navbar />
      <div className="flex flex-row items-center">
        <div className="mt-5  w-fit">
          <h1 className="text-[#091133] leading-[48px] md:text-[36px] text-[25px] font-medium ">
            Introduce Your Product{" "}
            <span className="block">Quickly & Effectively</span>
          </h1>
          <p className="md:text-[16px] font-normal leading-[26px] lg:w-[540px] w-[350px]  md:text-left text-justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="mt-5 flex flex-row gap-5">
            <button className="bg-[#111B47] w-[150px] h-[32px] rounded-md">
              <span className="text-white">Purchase Now</span>
            </button>
            <button className="rounded-md w-[150px] h-[32px] font-bold border-2 border-[#111B47]">
              <span>Learn more</span>
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/illustration-one.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
