import "./Home.css";
import React from "react";
import About from "../About/About";
import TopCompanies from "../TopCompanies/TopCompanies";
import Resources from "../Resources/Resources";
import Cover from "../Cover/Cover";
import Filteredjobs from "../Filteredjobs/Filteredjobs";
import AddJob from "../AddJob/AddJob";
import mobile from "../../assets/Images/mobile_app.png";
import google_app from "../../assets/Images/google_app.jpg";
import apple_app from "../../assets/Images/apple_app.jpg";
import { Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <main className="main-container">
        <Filteredjobs></Filteredjobs>
        <TopCompanies></TopCompanies>
        <div className="container mobile-app my-5">
          <div className="row align-items-center">
            <Col md={7}>
              <div className="text-center">
                <h5>The job you want is just an app away.</h5>
                <p>
                  Get recommended jobs sent right to you with the Jobs4You app.
                </p>
                <img src={google_app} alt="" style={{ height: "10vh" }} />
                {/* <img src={apple_app} alt="" style={{ height: "10vh" }} /> */}
              </div>
            </Col>
            <Col md={5}>
              <div className="text-center">
                <img src={mobile} alt="" style={{ height: "25vh" }} />
              </div>
            </Col>
          </div>
        </div>
        {/* <About></About> */}
        <Resources></Resources>
      </main>
    </div>
  );
};

export default Home;
