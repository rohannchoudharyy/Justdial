import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Swiper.css';

function Swiper() {
  const settings = {
    className: "center",
    centerMode: true, 
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: true, // Ensure arrows are enabled
    focusOnSelect: true,  // Allows click to select slide
    swipeToSlide: true,   // For better swipe handling
    slide: "div",  // Ensures the correct element type for sliding
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <h3>1</h3>
        </div>
        <div className="slider-item">
          <h3>2</h3>
        </div>
        <div className="slider-item">
          <h3>3</h3>
        </div>
        <div className="slider-item">
          <h3>4</h3>
        </div>
        <div className="slider-item">
          <h3>5</h3>
        </div>
        <div className="slider-item">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Swiper;
