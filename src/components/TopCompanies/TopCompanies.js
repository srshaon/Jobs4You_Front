import React from "react";
import Slider from "react-slick";
import "./TopCompanies.css";
import LogoWallex from "../../assets/Images/logo-wallex.png";

const TopCompanies = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 2000,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="topCompany-container my-5">
      <div>
        <div style={{}} className="shadow-lg py-4 rounded">
          <Slider {...settings}>
            <div className="img-container">
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center">
                <img style={{ maxWidth: "100px" }} src={LogoWallex} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
