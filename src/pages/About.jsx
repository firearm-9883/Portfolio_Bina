import React from "react";

const About = () => {
  return (
    <>
      <section className="grid grid-cols-2 relative top-[-90px] bg-[#1A1A1C]">
        <div className=" h-[100vh] relative">
          <div className="flex flex-col items-center justify-center h-[100%] relative ">
            <div className="ps-28 mt-16 mx-5">
              <h1 className="text-[#E3D9D9] text-[60px] font-[600] leading-[70px]">
                UI/UX DESIGNER
              </h1>
              <p className="text-[#E3D9D9] mt-4 text-[18px] font-[500] text-justify font-roboto">
                A junior UI/UX designer who is passionate about building user -
                friendly, entertaining and innovative websites and apps. I also
                play in graphic design mainly because i enjoy using color and
                shape to make ideas come to life.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" h-[100vh]">
          <div className="flex items-center justify-center h-[100%]">
            <div className="mt-40">
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
