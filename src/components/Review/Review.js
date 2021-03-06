import "./Review.css";

import React, { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user, name, auth } = useAuth();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const onSubmit = (data) => {
    data.ratingValue = rating;
    console.log(data);

    fetch("https://afternoon-headland-45054.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Rating Submitted Successfully");

          reset();
          setRating(null);
        }
      });
  };
  const imageUrl = user?.photoURL || "https://i.ibb.co/X4s5CGp/download.png";
  // console.log(user?.photoURL);
  let starNumber = 0;

  return (
    <div>
      <h3 className="text-center" style={{ color: "brown" }}>
        Please Share Your Valuable Opinion With Us
      </h3>
      <div className="review-section w-75 mx-auto mt-4">
        <div>
          <form
            className="review-form mx-auto text-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Name"
              defaultValue={user.displayName}
              {...register("name")}
            />

            <br />
            <input
              placeholder="Email"
              defaultValue={user.email}
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="error">This field is required</span>
            )}

            <textarea
              maxLength="300"
              className="m-0"
              placeholder="Your Valuable Opinion(max 300 characters)"
              defaultValue=""
              {...register("review")}
            />

            <br />
            {/* <input
              style={{ display: "none" }}
              type="number"
              min="0"
              max="5"
              placeholder="Rating(Out of 5)"
              defaultValue=""
              {...register("rating", { required: true })}
            /> */}
            {/* <br />

            {errors.rating && (
              <span className="error">This field is required</span>
            )} */}
            <div>
              Rating:{" "}
              {[...Array(5)].map((star, i) => {
                starNumber += 1;
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      style={{ display: "none" }}
                      type="radio"
                      name="rating"
                      id=""
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />

                    <FaStar
                      style={{ fontSize: "40px" }}
                      color={
                        ratingValue <= (hover || rating) ? "green" : "grey"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <br />
            <input
              className="review-submit-input"
              style={{
                padding: "9px",
                fontWeight: "800",
                border: "none",
              }}
              type="submit"
            />

            <input
              placeholder=""
              style={{ display: "none" }}
              defaultValue={imageUrl}
              {...register("photourl")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
