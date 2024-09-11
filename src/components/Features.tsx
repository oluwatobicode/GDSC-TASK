const features = [
  {
    name: "Light, Fast & Powerful",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "/illustration-three.png",
    link: "",
  },
  {
    name: "Light, Fast & Powerful",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "/illustration-four.png",
    link: "",
  },
  {
    name: "Light, Fast & Powerful",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    image: "/illustration-five.png",
    link: "www.google.com",
  },
];

const Features = () => {
  return (
    <div className="ml-6 mr-6 mb-[10rem]">
      <div className="flex flex-col gap-[5rem]">
        {features.map((ele, i) => (
          <div
            className="flex lg:flex-row flex-col items-center justify-between "
            key={i}
          >
            <img src={ele.image} alt={ele.name} />
            <div className="flex flex-col gap-5">
              <h1 className="text-[#091133] leading-[48px] md:text-[36px] text-[25px] font-medium ">
                {ele.name}
              </h1>
              <p className="md:text-[16px] font-normal leading-[26px] md:w-[540px]  md:text-left text-justify">
                {ele.desc}
              </p>
              {ele.link ? (
                <button className="bg-[#111B47] w-[150px] h-[32px] rounded-md">
                  <span className="text-white">Purchase Now</span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;
