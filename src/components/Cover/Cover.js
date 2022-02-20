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
            {/* <div className="">
              <h2>Explore Our Multiple Jobs & Unlock Your Potential</h2>
            </div> */}
            <div>
              <h2
                style={{
                  color: "#537890",
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
              <div className="banner-form mt-4">
                <form action="" className="d-md-flex justify-content-center">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Job title or keyword"
                    className="search-field"
                    style={{ color: "orange" }}
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Location (city or country)"
                    className="search-field"
                    style={{ color: "orange" }}
                  />
                  <button type="submit" className="search-btn">
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
