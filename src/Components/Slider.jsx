import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = () => {
  const image = [
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c7be22d26ee6cbbf.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/94bfd51f76554239.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/91824c447888012e.jpg?q=50",
  ];
  return (
    <div className="slider">
      <Carousel
      autoPlay
      interval={4000}
      infiniteLoop
      showArrows={true}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
      
      >
        {image.map((item, i) => {
          return (
            <div key={i} className="slider-image">
              <img src={item} alt="slider" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
