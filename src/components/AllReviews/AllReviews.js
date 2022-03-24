import "./AllReviews.css";

import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleReview from "../SingleReview/SingleReview";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const AllReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);

  if (reviews.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div className="container pt-4 pb-5">
      <h2 className="text-center" style={{ color: "brown" }}>
        What Our Clients Say
      </h2>
      <h4 className="text-center" style={{ opacity: "0.6" }}>
        Check honest reviews from our clients!
      </h4>
      <Slider {...settings}>
        {reviews?.map((review) => (
          <div
            style={{ border: "2px solid" }}
            className="bbb mt-4"
            key={review._id}
          >
            <div className="ccc bbb p-3">
              <div className="review-section-image">
                <img
                  style={{ borderRadius: "50%" }}
                  className="img-fluid p-2"
                  src={review.photourl}
                  alt=""
                />
              </div>
              <h6>Name: {review.name}</h6>
              <div>
                {[...Array(5)].map((star, i) => {
                  const a = i + 1;

                  return (
                    <label key={i}>
                      <input
                        style={{ display: "none" }}
                        type="radio"
                        name="rating"
                        id=""
                      />

                      <FaStar
                        color={a <= review.ratingValue ? "green" : "grey"}
                      />
                    </label>
                  );
                })}
              </div>
              <h6 style={{ fontSize: "20px" }}>
                <i className="fa-solid fa-quote-left"></i> {review.review}{" "}
                <i className="fa-solid fa-quote-right"></i>
              </h6>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllReviews;
