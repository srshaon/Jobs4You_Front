import React from "react";
import { Col } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

import banner from "../../assets/Images/banner_7.jpg";
import "./Cover.css";

const Cover = () => {
  return (
    <>
      <div className="banner-container overflow-hidden">
        <div>
          <img src={banner} alt="" className="banner-img" />

          <div className="banner w-100">
            {/* <div className="mb-5">
              <h1
                style={{
                  color: "purple",
                  fontWeight: "700",
                }}
              >
                WELCOME! HERE IS WHAT WE ARE!
              </h1>
            </div> */}
            <div>
              <h2
                style={{
                  color: "#537890",
                  fontFamily: "Alegreya, sans-serif",
                  fontSize: "45px",
                  fontWeight: "bolder",
                  letterSpacing: "1px",
                }}
              >
                {/* Explore Our */}
                <span
                  style={{
                    fontSize: "60px",
                    fontWeight: "900",
                    color: "brown",
                  }}
                >
                  <Typewriter
                    words={[
                      "2000+ jobs",
                      "500+ companies &",
                      "10k+ hiring stories",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <div className="banner-form">
                <form action="" className="d-md-flex justify-content-center">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Job title or keyword"
                    className="search-field search-icon"
                    style={{ color: "orange" }}
                  />

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Location (city or country)"
                    className="search-field location-icon"
                    style={{ color: "orange" }}
                  />
                  <button type="submit" className="search-btn p-3">
                    Find Jobs
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
