import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "./SingleReview.css";
import ScrollAnimation from "react-animate-on-scroll";
const SingleReview = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const { _id, name, review, ratingValue, photourl } = props.review;

  let starNumber = 0;
  return (
    <>
      <Slider {...settings}>
        <div className="review-section-image">
          <img
            style={{ borderRadius: "50%" }}
            className="img-fluid"
            src={photourl}
            alt=""
          />
        </div>
        <h6>Name: {name}</h6>
        <div>
          Rating:{" "}
          {[...Array(5)].map((star, i) => {
            starNumber += 1;

            return (
              <label key={i}>
                <input
                  style={{ display: "none" }}
                  type="radio"
                  name="rating"
                  id=""
                />

                <FaStar color={starNumber <= ratingValue ? "yellow" : "grey"} />
              </label>
            );
          })}
        </div>
        <h6>Review: {review}</h6>
      </Slider>
    </>
  );
};

export default SingleReview;
