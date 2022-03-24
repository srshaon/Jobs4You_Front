import React from "react";
import { SiWorkplace } from "react-icons/si";
import { Link } from "react-router-dom";
import { MdOutlineWork } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { Col } from "react-bootstrap";
import { CgWorkAlt } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { FcCurrencyExchange } from "react-icons/fc";

const LatestSingleJob = ({ job }) => {
  console.log(job);
  return (
    <div className="">
      <div className="container ">
        {/* {featuredJobs.slice(0, 4).map((job) => ( */}
        <div className="featured-job-card row d-md-flex align-items-center justify-content-center w-75 mx-auto p-4 mt-3">
          <Col md={2}>
            <img
              src={job.image}
              alt=""
              className="w-75 text-center p-2"
              style={{ borderRadius: "100px" }}
            />
          </Col>
          <Col md={8}>
            {
              <div>
                <Link className="job-list-link" to={`/jobdetails/${job._id}`}>
                  {" "}
                  <h5 className="" style={{ color: "brown" }}>
                    {job.job}
                  </h5>
                </Link>
                <p>
                  <span>
                    <CgWorkAlt />
                  </span>{" "}
                  {job.company}
                </p>

                <div className="d-md-flex">
                  <p>
                    <span>
                      <TiLocation />
                    </span>{" "}
                    {job.jobLocation}
                  </p>
                  <p>
                    <span className="ps-2">
                      {" "}
                      <FcCurrencyExchange />
                    </span>{" "}
                    {job.salary}
                  </p>
                </div>
              </div>
            }
          </Col>
          <Col md={2}>
            {job.employmentStatus === "Full-time" && (
              <div className="featured-job-btn-full p-3 text-center">
                {job.employmentStatus}
              </div>
            )}
            {job.employmentStatus === "Part-time" && (
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
      </div>
    </div>
  );
};

export default LatestSingleJob;
