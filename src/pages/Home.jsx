import React from "react";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="grid grid-cols-5 relative top-[-90px] bg-[#4E4E50]">
        <div className="col-span-2 card-shadow bg-[#1A1A1C] h-[100vh] relative">
          <div className="flex items-center justify-center h-[100%] relative">
            <h1 className="text-[150px] mt-32 strokeme font-modern">BINA</h1>
            <div className="absolute top-[85%] transform -translate-y-1/2 right-[-64px] cursor-pointer mr-5">
              {/* Adjust right and margin values according to your design */}
              <div className="bg-[#1A1A1C] rounded-[50%] p-5">
                {/* <IoArrowForwardCircleOutline className="text-white text-[60px] font-normal" /> */}
                <img src="/images/arrow.svg"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 h-[100vh]">
          <div className="flex items-center justify-center h-[100%]">
            <h1 className="text-[150px] mt-32 custom-gradient-text font-modern">
              LAWATI
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
