import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { galleryData } from "../const/galleryData";

class Gallery extends React.Component {
  render() {
    return (
      <section className="gallery relative top-[90px]">
        <div className="mx-10">
          <Carousel transitionTime="1000" infiniteLoop>
            {galleryData.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.imgUrl} alt={`img ${item.id}`} />
                  <p className="legend">{item.title}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    );
  }
}
export default Gallery;
