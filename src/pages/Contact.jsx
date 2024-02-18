import React from "react";
const Contact = () => {
  return (
    <>
      <section className="grid md:grid-cols-5 relative top-44 md:top-[40px] bg-[#1A1A1C] height-screen">
        <div className="col-span-2  items-center flex">
          <div className="flex flex-col items-start ps-40 justify-center relative">
            <div className="contact-items text-white text-[20px]">
              <h3 className=" mb-7">Baneshwor, Kathmandu</h3>
              <h3 className=" mb-7">9817911272</h3>
              <h3 className=" mb-7">binalawati25@gmail.com</h3>
            </div>
          </div>
        </div>

        <div className="col-span-3 ">
          <div className="flex flex-col  items-center justify-center h-[100%]">
            <h1 className="text-[#CED0D0] text-[100px] leading-[120px] mt-24">
              GET IN <br />
              TOUCH
            </h1>
            <div className="flex flex-row gap-10 mt-20 text-[#CED0D0] underline text-[20px] font-[600]">
              <a href="https://linkedin.com/" target="_blank">
                Linkedin
              </a>
              <a href="https://linkedin.com/" target="_blank">
                Viber
              </a>
              <a href="https://linkedin.com/" target="_blank">
                Whatapp
              </a>
              <a href="https://linkedin.com/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
