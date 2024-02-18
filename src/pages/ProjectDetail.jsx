import React, { useEffect, useRef, useState } from "react";
import { CgAttachment } from "react-icons/cg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { projectData } from "../const/projectData";
import ProjectCard from "../container/ProjectCard";
import glimpse1 from "/images/projectGlimpse/glimpse1.svg";
import glimpse2 from "/images/projectGlimpse/glimpse2.svg";
import glimpse3 from "/images/projectGlimpse/glimpse3.svg";

const ProjectDetail = () => {
  const [imageUrls, setImageUrls] = useState([glimpse1, glimpse2, glimpse3]);

  let sliderRef = useRef(null);

  // useState(() => {
  //   const urls = projectData.map((item) => item.imageUrl);
  //   setImageUrls(urls);
  // }, []);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <section className="project-detail relative top-[100px] bg-[#1A1A1C] overflow-hidden h-auto">
        <div className="project-overview flex items-center justify-center relative">
          <div className="text-[#E3D9D9] font-roboto w-[75%]">
            <h1 className="text-[30px] mt-10 mb-20 text-center font-semibold">
              PORJECT OVERVIEW
            </h1>
            <div className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 mt-10">
              <div className="project-topic md:border-r md:border-gray-300 md:pr-10">
                <h3 className="text-2xl font-[600]">
                  Healthcare Management System
                </h3>
                <p className="mt-3">
                  Developing a comprehensive healthcare management system for
                  hospitals or clinics, including features like patient
                  registration, appointment scheduling, electronic health
                  records (EHR), billing, and inventory management.
                </p>
                <div className="flex items-center mt-10 text-white font-semibold ps-10  flex-wrap justify-between rounded-3xl bg-[#3D4849]">
                  <h4 className="text-lg">Get the Source code </h4>
                  <div className="flex items-center">
                    <h5 className="mr-4 text-lg">Github</h5>
                    <Link className="px-6 py-4 bg-white rounded-3xl cursor-pointer ">
                      <CgAttachment className="text-black text-2xl " />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project-description gap-10 grid grid-cols-2">
                <div className="project-role">
                  <h1 className="text-xl font-[600]">MY ROLE</h1>
                  <p className="mt-3">
                    Create wireframes, prototypes, and mockups for different
                    screens and components of the HMS. Design intuitive and
                    user-friendly interfaces that prioritize usability,
                    accessibility, and efficiency.
                  </p>
                </div>
                <div className="project-team">
                  <h1 className="text-xl font-[600]">TEAM</h1>
                  <p className="mt-3">
                    Angel Rana. Bina Lawati. Bina Rana. Angel Lawati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-glimpse flex items-center justify-center relative mt-20">
          <div className="text-[#E3D9D9] font-roboto w-[75%]">
            <h1 className="text-[30px] my-20 text-center font-semibold">
              PORJECT GLIMPSE
            </h1>
            <div className="slider-container flex flex-col items-center">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              >
                {imageUrls.map((item, index) => (
                  <div key={index} className="rounded-[40px]">
                    <img src={item} alt={`img ${item}`} />
                  </div>
                ))}
              </Slider>
              <div style={{ textAlign: "center" }}>
                <button className="button bg-transparent" onClick={previous}>
                  <FaRegArrowAltCircleLeft className="text-4xl text-white" />
                </button>
                <button className="button bg-transparent" onClick={next}>
                  <FaRegArrowAltCircleRight className="text-4xl text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="more-project flex items-center justify-center relative mt-20">
          <div className="text-[#E3D9D9] font-roboto ">
            <h1 className="text-[30px] mt-20 text-center font-semibold">
              More Project
            </h1>
            <ProjectCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
