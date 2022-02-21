import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./JobDetails.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import image from "../../assets/Images/job_search.jpg";
import { Spinner } from "react-bootstrap";

const JobDetails = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://still-cliffs-68775.herokuapp.com/jobs/${jobId}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [jobId]);
  console.log(jobs?.additionalRequirements);
  if (jobs.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div className="detailBody">
      {
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mx-auto">
          <div className="" style={{ borderRight: "2px solid gray" }}>
            <h2 style={{ color: "brown" }}>{jobs.job}</h2>
            <h3 className="pb-3" style={{ color: "brown" }}>
              {jobs.company}
            </h3>
            <p>
              <b style={{ fontSize: 20 }}>Vacancy ➾</b>{" "}
              <span>{jobs.vacancy}</span>
            </p>
            <p>
              <b style={{ fontSize: 20 }}>Job Responsibilites ➾</b>{" "}
              <span>{jobs.jobResponsibilities}</span>
            </p>
            <p>
              <b style={{ fontSize: 20 }}>Employment Status ➾</b>{" "}
              <span>{jobs.employmentStatus}</span>
            </p>
            <p>
              <b style={{ fontSize: 20 }}>Educational Requirements ➾</b>{" "}
              <span>{jobs.educationalRequirements}</span>
            </p>
            <p>
              <b style={{ fontSize: 20 }}>Experience Requirements ➾</b>{" "}
              <span>{jobs.experienceRequirements}</span>
            </p>
            <p>
              <b style={{ fontSize: 20 }}> Job Location ➾</b>{" "}
              <span>{jobs.jobLocation}</span>
            </p>
            <p>
              <b style={{ fontSize: 20 }}> Salary ➾</b>{" "}
              <span>৳ {jobs.salary}</span>
            </p>
            <p>
              <b style={{ fontSize: 20 }}>Additional Requirements ➾</b>
              <ul>
                {jobs?.additionalRequirements.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </p>
          </div>

          <div>
            <div style={{ color: "brown" }}>
              <h5 className="">Category: {jobs.category}</h5>
              <h5>Location: {jobs.jobLocation}</h5>
              <h5>Employment Status: {jobs.employmentStatus}</h5>
            </div>
            <div id="container">
              <div className="job-details text-center">
                <h4>JOB DESCRIPTION</h4>
                <p className="information">
                  Product managers lead cross functional projects to generate
                  vision and create iterative plans for execution and helps
                  other team to execute the proposed vision. End results of
                  these visions are developing new technology product, features
                  or developing a new process which drives growth or operational
                  excellence.
                </p>
              </div>

              <div class="job-image">
                <h1 className="p-3">
                  <IoIosArrowDropdownCircle />
                </h1>
                <img
                  className="py-2"
                  style={{ width: "100%", height: "40vh" }}
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsdgy6Er7YJgjPfgpC3Toi_hMJPtednU_6g&usqp=CAU"
                  src={image}
                  alt=""
                />

                <div class="info">
                  <h2 className="pt-5">Summary</h2>
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
    </div>
  );
};

export default JobDetails;
