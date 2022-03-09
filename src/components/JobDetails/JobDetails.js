import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./JobDetails.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import image from "../../assets/Images/job-search.jpg";
import { Button, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
const JobDetails = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://afternoon-headland-45054.herokuapp.com/jobs/${jobId}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [jobId]);
  console.log(jobs?.additionalRequirements);
  if (jobs.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div className="job-detail-container pb-5">
      <div className="container pb-5">
        <div className="py-5">
          {
            <div className="job-detail-title">
              <h5>{jobs.category}</h5>
              <h4 style={{ color: "brown" }}>
                {jobs.job}{" "}
                <span className="job-detail-btn p-2 ms-2">
                  {jobs.employmentStatus}
                </span>
              </h4>
            </div>
          }
          <div className="job-detail-card row d-flex align-items-center justify-content-center p-5 mt-4">
            <Col md={2}>
              <img src={jobs.image} alt="" className="w-75 text-center p-2" />
            </Col>
            <Col md={7}>
              {
                <div>
                  <h5 className="" style={{ color: "brown" }}>
                    {jobs.company}
                  </h5>
                  <h5>{jobs.jobLocation}</h5>
                </div>
              }
            </Col>
            <Col md={3}>
              <div>
                <Link to={`/apply/${jobs._id}`}>
                  <Button className="apply-btn px-5">Apply for job</Button>
                </Link>
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
                <p>
                  <b style={{ fontSize: 18 }}> Salary ➾</b>{" "}
                  <span>৳ {jobs.salary}</span>
                </p>
                <div>
                  <b style={{ fontSize: 18 }}>Additional Requirements ➾</b>
                  <ul>
                    {jobs?.additionalRequirements.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="d-md-flex align-items-center">
                <div id="container" className="d-flex align-items-center">
                  <div className="job-details text-center ">
                    <h4
                      className=""
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
                      Product managers lead cross functional projects to
                      generate vision and create iterative plans for execution
                      and helps other team to execute the proposed vision. End
                      results of these visions are developing new technology
                      product, features or developing a new process which drives
                      growth or operational excellence.
                    </p>
                  </div>

                  <div class="job-image">
                    <h1 className="p-3">
                      <IoIosArrowDropdownCircle />
                    </h1>
                    <img
                      className="pb-4"
                      style={{ width: "100%", height: "40vh", opacity: "0.8" }}
                      // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsdgy6Er7YJgjPfgpC3Toi_hMJPtednU_6g&usqp=CAU"
                      src={image}
                      alt=""
                    />

                    <div class="info">
                      <h3 className="pt-5">Summary</h3>
                      <ul>
                        <li>
                          <strong>Published On : </strong>
                          {jobs.publishedOn}{" "}
                        </li>
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
                          <strong>Salary: ৳ </strong>
                          {jobs.salary}
                        </li>
                        <li>
                          <strong>Application Deadline: </strong>
                          {jobs.aplicationDeadline}
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
