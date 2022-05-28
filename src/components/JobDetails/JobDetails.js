import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./JobDetails.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import image from "../../assets/Images/job-search.jpg";
import { Button, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const JobDetails = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplication] = useState([]);
  const [applyList, setApplyList] = useState([]);
  const [message, setMessage] = useState("Already Applied")
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://afternoon-headland-45054.herokuapp.com/jobs/${jobId}`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .then(() => {
        fetch("https://afternoon-headland-45054.herokuapp.com/applyList")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const totalApplyLIst = data;
            const individualApplyList = totalApplyLIst.filter(
              (job) => job.jobId == `${jobId}`
            );

            setApplication(individualApplyList);
            console.log(individualApplyList);
          });
      });
  }, [jobId, applications?.length]);
  // console.log(jobs?.additionalRequirements);
  //Fetch applyList

  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/applyList")
      .then((res) => res.json())
      .then((data) => setApplyList(data));
  }, [])

  if (jobs.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }
  console.log(applications);
  let applyCandidatesEmails = [];
  if (applications.length > 0) {
    applications.map((a) => {
      applyCandidatesEmails.push(a.email);
    });
  }
  console.log(applyCandidatesEmails);
  return (
    <div className="job-detail-container pt-4 pb-5">
      <div className="container pb-5">
        <div className="py-5">
          <div className="job-detail-title row d-md-flex align-items-center">
            <Col md={7}>
              <div>
                <h5>{jobs.category}</h5>
                <h4 style={{ color: "brown" }}>
                  {jobs.job}{" "}
                  <span className="job-detail-btn py-3 px-2 ms-1">
                    {jobs.employmentStatus}
                  </span>
                </h4>
              </div>
            </Col>
            <Col md={5}>
              <div className="text-center">
                <h5>Number of Applications:</h5>
                <h4
                  style={{
                    fontSize: "25px",
                    color: "brown",
                    fontWeight: "500",
                  }}
                >
                  {applications?.length}
                </h4>
              </div>
            </Col>
          </div>
          <div className="job-detail-card row d-flex align-items-center justify-content-center p-5 mt-3">
            <Col md={2}>
              <img
                src={jobs.image}
                alt=""
                className="w-75 text-center p-2"
                style={{ borderRadius: "150px" }}
              />
            </Col>
            <Col md={6}>
              {
                <div>
                  <h5 className="" style={{ color: "brown" }}>
                    {jobs.company}
                  </h5>
                  <h5>{jobs.jobLocation}</h5>
                </div>
              }
            </Col>
            {/* <Col md={3}>
              <div>
                <span
                  style={{
                    background: "#0d6efd",
                    color: "white",
                    fontSize: "28px",
                  }}
                >
                  Total Application: {applications.length}
                </span>
              </div>
            </Col> */}
            <Col md={4}>
              <div className="text-center">
                {applyList?.find((apply) => apply?.length === 0) &&
                  jobs?.length === 0 && (
                    <Spinner animation="border" variant="danger" />
                  )}
                {applyList?.find(
                  (apply) =>
                    apply?.jobId === jobs?._id && user.email === apply?.email
                ) ? (
                  <h4 style={{ color: "green" }}>Already applied</h4>
                ) : (
                  <Link to={`/chart/${jobs._id}`}>
                    <Button
                      className="p-3 border-0"
                      style={{ background: "purple" }}
                    >
                      Find out if you are eligible to apply?
                    </Button>
                  </Link>
                )}
              </div>
            </Col>
          </div>
        </div>

        <div>
          {
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1">
              <div
                className="text-justify"
                style={{ borderRight: "2px solid gray" }}
              >
                <p>
                  <b style={{ fontSize: 18 }}>Vacancy ➾</b>{" "}
                  <span>{jobs.vacancy}</span>
                </p>
                <p>
                  <b style={{ fontSize: 18 }}>Job Responsibilites ➾</b>{" "}
                  <span>{jobs.jobResponsibilities}</span>
                </p>

                <p>
                  <b style={{ fontSize: 18 }}>Educational Requirements ➾</b>{" "}
                  <span>{jobs.educationalRequirements}</span>
                </p>
                <p>
                  <b style={{ fontSize: 18 }}>Experience Requirements ➾</b>{" "}
                  <span>{jobs.experienceRequirements}</span>
                </p>

                <div>
                  <b style={{ fontSize: 18 }}>Skills Required ➾</b>
                  <ul>
                    {jobs?.skills.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <b style={{ fontSize: 18 }}>Additional Requirements ➾</b>
                  <ul>
                    {jobs?.additionalRequirements.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  <b style={{ fontSize: 18 }}> Salary ➾</b>{" "}
                  <span>{jobs.salary}</span>
                </p>
              </div>

              <div className="d-md-flex align-items-center">
                <div id="container" className="d-flex align-items-center">
                  <div className="job-details text-center ">
                    <h4
                      className="pt-2"
                      style={{ color: "brown", fontWeight: "600" }}
                    >
                      JOB DESCRIPTION
                    </h4>
                    <p
                      className="information text-center p-3"
                      style={{
                        fontSize: "16px",
                        color: "white",
                        opacity: "0.8",
                      }}
                    >
                      {jobs.description}
                    </p>
                  </div>

                  <div className="job-image">
                    <h1 className="p-3">
                      <IoIosArrowDropdownCircle className="heart" />
                    </h1>
                    <img
                      className="pb-4"
                      style={{
                        width: "100%",
                        height: "40vh",
                        opacity: "0.8",
                      }}
                      src={image}
                      alt=""
                    // className="w-100 py-4"
                    // style={{ height: "35vh" }}
                    />

                    <div className="info">
                      <h3 className="pt-5">Summary</h3>
                      <ul>
                        <li>
                          <strong>Vacancy : </strong>
                          {jobs.vacancy}
                        </li>
                        <li>
                          <strong>Employment Status: </strong>
                          {jobs.employmentStatus}
                        </li>
                        <li>
                          <strong>Experience: </strong>
                          {jobs.experienceRequirements}
                        </li>
                        <li>
                          <strong>Job Location: </strong>
                          {jobs.jobLocation}
                        </li>

                        <li>
                          <strong>Application Deadline: </strong>
                          {jobs.applicationDeadline}
                        </li>
                        <li>
                          <strong>Salary: </strong>
                          {jobs.salary}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {/* <div className="d-flex justify-content-center mt-4 mb-3">
          <Link to={`/apply/${jobs._id}`}>
            <Button className="apply-btn">Apply</Button>
          </Link>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
