import React from "react";
import { Col } from "react-bootstrap";
import banner1 from "../../assets/Images/banner_1.jpg";
import banner from "../../assets/Images/banner.png";
import "./Cover.css";

const Cover = () => {
  return (
    <>
      <div className="overflow-hidden banner">
        <div className="banner-container row align-items-center mx-auto">
          <Col md={6} className="">
            <img
              className="image-fluid banner-img"
              src={banner1}
              alt="Second slide"
            />
          </Col>
          <Col md={6}>
            <div className="banner-right text-center">
              <div className="align-items-center">
                <div>
                  <h2
                    style={{
                      color: "#362706",
                      fontSize: "35px",
                      fontWeight: "700",
                    }}
                  >
                    Browse Our Multiple
                  </h2>
                  <img
                    className="image-fluid banner-img2"
                    src={banner}
                    alt="Second slide"
                  />
                  <h2
                    style={{
                      color: "#362706",
                      fontSize: "35px",
                      fontWeight: "700",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontSize: "45px",
                        fontWeight: "900",
                      }}
                    >
                      &
                    </span>{" "}
                    <br /> Unlock Your{" "}
                    <span style={{ color: "" }}>Potential</span>
                  </h2>
                </div>
              </div>

              <div className="mt-5">
                <form action="" className="">
                  <input type="text" name="" id="" placeholder="Search..." />
                </form>
              </div>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Cover;
