import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import banner from "../../assets/Images/banner_7.jpg";
import useAuth from "../../hooks/useAuth";
import "./Cover.css";

const Cover = () => {
  const { searchKey, setSearchKey, searchLocation, setSearchLocation } =
    useAuth();

  const handleSearchByKey = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearchKey(searchText);
    console.log(searchText);
  };

  const handleSearchByLocation = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    console.log(searchText);
    setSearchLocation(searchText);
  };

  return (
    <>
      <div className="banner-container overflow-hidden">
        <div >
          <img src={banner} alt="" className="banner-img " />

          <div className="banner w-100">
            <div>
              <h2 className="banner-text">
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
              </h2>
              <div className="banner-form">
                <form action="" className="d-md-flex justify-content-center banner-form-input">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Job title or keyword"
                    className="search-field search-icon"
                    style={{ color: "orange" }}
                    onChange={handleSearchByKey}
                  />

                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Location (city or country)"
                    className="search-field location-icon"
                    style={{ color: "orange" }}
                    onChange={handleSearchByLocation}
                  />
                  <Link to="/searchResult">
                    <button className="search-btn footer-search-btn p-3">Find Jobs</button>
                  </Link>
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