import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  return (
    <div className="mb-5 pb-3">
      <h2 className="text-center" style={{ color: "brown" }}>
        Featured Jobs
      </h2>
      <div className="container mt-4">
        {featuredJobs.slice(0, 4).map((job) => (
          <div className="featured-job-card row d-md-flex align-items-center justify-content-center w-75 mx-auto p-4 mt-3">
            <Col md={2}>
              <img src={job.image} alt="" className="w-75 text-center p-2" />
            </Col>
            <Col md={8}>
              {
                <div className="px-2">
                  <h5 className="" style={{ color: "brown" }}>
                    {job.job}
                  </h5>
                  <p>
                    {job.company} {job.jobLocation} {job.salary}
                  </p>
                </div>
              }
            </Col>
            <Col md={2}>
              {job.employmentStatus === "Full-time" && (
                <div className="featured-job-btn-full p-3 text-center">
                  {job.employmentStatus}
                </div>
              )}
              {job.employmentStatus === "Part-Time" && (
                <div className="featured-job-btn-part p-3 text-center">
                  {job.employmentStatus}
                </div>
              )}
              {job.employmentStatus === "Hybrid" && (
                <div className="featured-job-btn-hybrid p-3 text-center">
                  {job.employmentStatus}
                </div>
              )}
              {job.employmentStatus === "Remote" && (
                <div className="featured-job-btn-remote p-3 text-center">
                  {job.employmentStatus}
                </div>
              )}
            </Col>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
