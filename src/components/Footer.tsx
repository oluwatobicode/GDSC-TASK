import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#E7ECFF]  w-full flex flex-col items-center justify-center p-3">
      <div className="flex flex-col gap-5 p-3 md:p-10 md:w-[700px] w-[400px]">
        <div className="flex flex-wrap justify-center gap-5 md:gap-0  md:justify-between items-center">
          <span>©2023 Your company</span>
          <h1 className="text-[26px] font-black leading-[38px] text-[#37447E]">
            Landing
          </h1>
          <button className="bg-[#111B47] w-[150px] h-[32px] rounded-md">
            <span className="text-white">Purchase Now</span>
          </button>
        </div>
        <div className="w-[350px] md:w-full flex flex-col md:flex-row items-center justify-between flex-wrap pt-5 md:pt-5  border-t-[2px] border-opacity-[10%] border-[#CDD1D4]">
          <div className="flex flex-row ">
            <ul className="flex flex-row gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="flex flex-row gap-2 mt-5 md:mt-0 mb-5 ">
            <FaFacebookF color="#CDD1D4" size={25} />
            <FaLinkedin color="#CDD1D4" size={25} />
            <FaTwitter color="#CDD1D4" size={25} />
            <FaYoutube color="#CDD1D4" size={25} />
            <FaInstagram color="#CDD1D4" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
