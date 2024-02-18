import React, { useState } from "react";
import Spinner from "../container/Spinner";
import Achievements from "../components/Achievements";

const About = () => {
  const [heading, setHeading] = useState("My Expertise");
  return (
    <>
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 relative top-[-90px] bg-[#1A1A1C] ">
          <div className="top-[-90px] md:top-[10px] md:h-[100vh] relative order-2 md:order-1">
            <div className="flex flex-col items-center justify-center h-[100%] relative ">
              <div className="md:ps-28 mt-[-10px] md:mt-[-125px] mx-16 sm:mx-20 md:mx-5">
                <h1 className="text-[#E3D9D9] md:mt-32 text-[40px] lg:text-[50px] font-[600] leading-[50px] md:leading-[70px]">
                  UI/UX DESIGNER
                </h1>
                <p className="text-[#E3D9D9] mt-4  text-xs leading-5 md:leading-6 md:text-base lg:text-[18px] font-[500] text-justify font-roboto">
                  A junior UI/UX designer who is passionate about building user
                  - friendly, entertaining and innovative websites and apps. I
                  also play in graphic design mainly because i enjoy using color
                  and shape to make ideas come to life.{" "}
                </p>
                <a className=" slide-in-animation ">
                  <img
                    className="mt-2 cursor-pointer"
                    src="/images/aboutImg.svg"
                  ></img>
                </a>
              </div>
              <div>
                <Spinner />
              </div>
            </div>
          </div>

          <div className=" h-[80vh] md:h-[100vh] order-1 md:order-2">
            <div className="flex items-center justify-center h-[100%]">
              <div className=" mt-40 md:mt-40">
                <h1 className="text-[140px] flex  text-[#45A29E] font-roboto font-[600]">
                  HI{" "}
                  <img
                    src="/images/myPic.png"
                    className="img-fluid mx-3"
                    width={160}
                  ></img>
                  !
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:gap-10 lg:gap-20 md:grid-cols-6 relative italic text-[#E3D9D9] mx-5 sm:mx-16 md:mx-32  font-palatino">
          <div className="col-span-4 mb-20 order-last md:order-1">
            <Achievements title={heading} />
          </div>
          <div className="col-span-2 mb-20 order-1 md:order-last">
            <div className="flex flex-col gap-6 mt-10">
              <div
                onClick={() => setHeading("My Expertise")}
                className={` ${
                  heading === "My Expertise"
                    ? "h-[200px] "
                    : "hover:scale-110 hover:bg-[#40a39c] duration-300"
                } bg-[#2d7570] rounded-3xl py-3 px-10 w-full cursor-pointer `}
              >
                <p className="text-xl">My Expertise</p>
              </div>
              <div
                onClick={() => setHeading("Experiences Tools")}
                className={`${
                  heading === "Experiences Tools"
                    ? "h-[200px] "
                    : "hover:scale-110 hover:bg-[#40a39c] duration-300"
                } bg-[#2d7570] rounded-3xl py-3 px-10 w-full cursor-pointer `}
              >
                <p className="text-xl">Experiences Tools</p>
              </div>
              <div
                onClick={() => setHeading("My Skills")}
                className={`${
                  heading === "My Skills"
                    ? "h-[200px] "
                    : "hover:scale-110 hover:bg-[#40a39c] duration-300"
                } bg-[#2d7570] rounded-3xl py-3 px-10 w-full cursor-pointer`}
              >
                <p className="text-xl">My Skills</p>
              </div>
              <div
                onClick={() => setHeading("Experiences")}
                className={`${
                  heading === "Experiences"
                    ? "h-[200px] "
                    : "hover:scale-110 hover:bg-[#40a39c] duration-300"
                } bg-[#2d7570] rounded-3xl py-3 px-10 w-full cursor-pointer`}
              >
                <p className="text-xl">Experiences</p>
              </div>
              <div
                onClick={() => setHeading("Achievements")}
                className={`${
                  heading === "Achievements"
                    ? "h-[200px] "
                    : "hover:scale-110 hover:bg-[#40a39c] duration-300"
                } bg-[#2d7570] rounded-3xl py-3 px-10 w-full cursor-pointer`}
              >
                <p className="text-xl">Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
