import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const navLink = [
  {
    nav: "Home",
    link: "",
  },
  {
    nav: "About",
    link: "",
  },
  {
    nav: "Contact",
    link: "",
  },
];

function Navbar() {
  const [nav, showNav] = useState(false);

  const toggleNav = () => {
    showNav(!nav);
  };

  return (
    <div className="">
      <div className="hidden  lg:flex p-10 h-16 items-center w-full">
        <div className="flex items-center mr-auto gap-10 transition duration-75">
          {navLink.map((ele, index) => (
            <ul key={index}>
              <li>
                <a
                  className="text-[16px] text-[#505F98] font-bold"
                  href={ele.link}
                >
                  {ele.nav}
                </a>
              </li>
            </ul>
          ))}
        </div>

        <div className="mr-auto">
          <h1 className="text-[26px] font-black leading-[38px] text-[#37447E]">
            Landing
          </h1>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button className="bg-[#111B47] w-[150px] h-[32px] rounded-md">
            <span className="text-white">Buy Now</span>
          </button>
        </div>
      </div>

      <div className="lg:hidden flex p-10 h-16 items-center w-full">
        <div className="mr-auto">
          <h1 className="text-[26px] font-black leading-[38px] text-[#37447E]">
            Landing
          </h1>
        </div>

        <button onClick={toggleNav}>
          <RxHamburgerMenu size={30} />
        </button>
      </div>

      {nav && (
        <div className="lg:hidden  flex flex-col h-full w-full fixed z-10 top-0 left-0   bg-white items-center justify-center  gap-10">
          <div className="absolute top-10 right-10" onClick={toggleNav}>
            <IoClose size={30} />
          </div>

          <div className="">
            <h1 className="text-[26px] font-black leading-[38px] text-[#37447E]">
              LANDING
            </h1>
          </div>

          <div className="text-center relative">
            {" "}
            {navLink.map((ele, index) => (
              <ul key={index}>
                <li>
                  <a
                    className="lg:text-[16px] text-[22px] text-[#505F98] md:text-[30px]  font-bold"
                    href={ele.link}
                  >
                    {ele.nav}
                  </a>
                </li>
              </ul>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-5">
            <button className="bg-[#111B47] w-[150px] h-[32px] rounded-md">
              <span className="text-white">Buy Now</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
