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
import Footer from "../Footer/Footer";
import useAuth from "../../hooks/useAuth";
import LatestJobs from "../LatestJobs/LatestJobs";
import AllReviews from "../AllReviews/AllReviews";
const Home = () => {
  const { user, role, admin, feauturedJobVisibility, setFeauturedJobVisibility, feauturedJobDisplay, setFeauturedJobDisplay } = useAuth();
  console.log('from home:: this is user:', user, 'this is role:', role, 'this is admin:', admin)
  const something = () => {
    // console.log('clicked')
    // const filteredJob = document.getElementById('featurejobs');
    document.getElementById('featurejobs').style.display = "block"
    document.getElementById("featurejobs").style.visibility = "visible";
    document.getElementById('latestjobs').style.display = "none"
    document.getElementById("latestjobs").style.visibility = "hidden";
    // console.log(filteredJob);
    // setFeauturedJobVisibility('hidden');
    // setFeauturedJobDisplay('none');
  }


  const something2 = () => {
    // console.log('clicked')
    // const filteredJob = document.getElementById('latestjobs');
    document.getElementById('featurejobs').style.display = "none"
    document.getElementById("featurejobs").style.visibility = "hidden";
    document.getElementById('latestjobs').style.display = "block"
    document.getElementById("latestjobs").style.visibility = "visible";
    // console.log(filteredJob);
    // setFeauturedJobVisibility('visible');
    // setFeauturedJobDisplay('block');
  }
  window.onload = function () {
    console.log('clicked');
    document.getElementById('feature-job-button').click();
  }
  return (

    <div style={{ overflowX: 'hidden' }} className="home-container-nuzhat">
      {/* <Header></Header> */}
      <Cover></Cover>
      <main className="main-container">

        <Filteredjobs ></Filteredjobs>
        <div className="ooooo d-flex justify-content-center" style={{ margin: '0px', padding: '0px', backgroundColor: 'transparent', display: 'inline' }}>
          <button id='feature-job-button' className='feature-job-button' onClick={something} autoFocus style={{ margin: '0px', padding: '0px', backgroundColor: 'transparent', display: 'inline', marginRight: '1px', outline: 'none' }}>
            <h2 className="text-center" style={{ color: "brown", display: 'inline' }}>
              Featured Jobs
            </h2>
            {/* <FeaturedJobs className='feature-jobs'></FeaturedJobs> */}
          </button>
          <button className="latest-job-button" onClick={something2} style={{ margin: '0px', padding: '0px', backgroundColor: 'transparent', display: 'inline', outline: 'none', marginLeft: '1px', }}>
            <h2 className="text-center" style={{ color: "brown", display: 'inline' }}>
              Latest Jobs
            </h2>
            {/* <FeaturedJobs className='feature-jobs'></FeaturedJobs> */}
          </button>
          {/* <button>
            <LatestJobs className='latest-jobs'></LatestJobs>
          </button> */}
        </div>
        <div style={{ display: 'block', visibility: "visible" }} id='featurejobs'>
          <FeaturedJobs className='feature-jobs'></FeaturedJobs>
        </div>
        <div style={{ display: 'none', visibility: 'hidden' }} id='latestjobs'>
          <LatestJobs className='latest-jobs'></LatestJobs>
        </div>




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
        <AllReviews></AllReviews>
      </main>
    </div>
  );
};

export default Home;
