import React, { useRef } from "react";
import Slider from "react-slick";
import { galleryData } from "../const/galleryData";

const Gallery = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={galleryData[i].imgUrl} />
        </a>
      );
    },
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    pauseOnHover: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="gallery relative top-[90px] flex items-center justify-center">
      <div className="mx-10 mb-40 slider-container w-[60%]">
        <Slider {...settings}>
          {galleryData.map((item, index) => (
            <div key={index} className="rounded-3xl">
              <img src={item.imgUrl} alt={`img ${item.id}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
