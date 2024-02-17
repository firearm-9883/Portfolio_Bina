import React from "react";
import Test from "../container/Test";

const About = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 relative top-[-90px] bg-[#1A1A1C] overflow-hidden">
        <div className="top-[-90px] md:top-[10px] md:h-[100vh] relative order-2 md:order-1">
          <div className="flex flex-col items-center justify-center h-[100%] relative ">
            <div className="md:ps-28 mt-[-125px] mx-16 sm:mx-20 md:mx-5">
              <h1 className="text-[#E3D9D9] md:mt-32 text-[40px] lg:text-[50px] font-[600] leading-[50px] md:leading-[70px]">
                UI/UX DESIGNER
              </h1>
              <p className="text-[#E3D9D9] mt-4  text-xs leading-5 md:leading-6 md:text-base lg:text-[18px] font-[500] text-justify font-roboto">
                A junior UI/UX designer who is passionate about building user -
                friendly, entertaining and innovative websites and apps. I also
                play in graphic design mainly because i enjoy using color and
                shape to make ideas come to life.{" "}
              </p>
              <a className="">
                <img
                  className="mt-2 cursor-pointer"
                  src="/images/aboutImg.svg"
                ></img>
              </a>
            </div>
            <div>
              <Test />
            </div>
          </div>
        </div>

        <div className=" h-[80vh] md:h-[100vh] order-1 md:order-2">
          <div className="flex items-center justify-center h-[100%]">
            <div className=" md:mt-40">
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
      </section>
    </>
  );
};

export default About;
