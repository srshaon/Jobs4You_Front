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
import { Button, Col, Row } from "react-bootstrap";
import Header from "../Header/Haeder";
import image from "../../assets/Images/banner3.png";
import Companies from "../Companies/Companies";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <main className="main-container">
        <Filteredjobs></Filteredjobs>
        <FeaturedJobs></FeaturedJobs>
        <div className="explore-bg">
          <div className="container">
            <div className="explore-container row align-items-center d-md-flex">
              <Col md={5}>
                <div className="explore-text ps-4">
                  <h3 className="mb-3">
                    Explore a faster, easier and better job search
                  </h3>
                  <ul className="checkmark">
                    <li className="checkmark-list d-md-flex align-items-center">
                      <span className="checkmark-icon">&#10003;</span>
                      <span className="checkmark-text px-3">
                        Unmatched quality of remote, hybrid, and flexible jobs
                      </span>
                    </li>
                    <li className="checkmark-list d-md-flex align-items-center">
                      <span className="checkmark-icon">&#10003;</span>
                      <span className="checkmark-text px-3">
                        Explore the rate of your skill set with the job
                        requirements
                      </span>
                    </li>
                    <li className="checkmark-list d-md-flex align-items-center">
                      <span className="checkmark-icon">&#10003;</span>
                      <span className="checkmark-text px-3">
                        Chat anonymously with our Jobs4You admin 24/7.
                      </span>
                    </li>
                  </ul>
                  <Button className="explore-btn p-3">Browse Jobs</Button>
                </div>
              </Col>
              <Col md={7}>
                <img src={image} alt="" className="w-100 text-center p-3" />
              </Col>
            </div>
          </div>
        </div>
        {/* <TopCompanies></TopCompanies> */}
        <Companies></Companies>
        <div className="container mobile-app my-5 p-2">
          <div className="row align-items-center d-md-flex">
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
      </main>
    </div>
  );
};

export default Home;
