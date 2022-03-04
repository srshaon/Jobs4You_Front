import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ImLocation2 } from "react-icons/im";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { SiWorkplace } from "react-icons/si";
import { Spinner } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./AllCategoriesJobs.css";

const AllCategoriesJobs = () => {
  const { categoryName } = useParams();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const approvedJobs = data.filter(
          (job) => job?.status?.toLowerCase() === "approved"
        );
        const filtercategory = approvedJobs.filter(
          (category) => category.category === categoryName
        );
        setJobs(filtercategory);
      });
  }, []);
  if (jobs.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div className="main-container">
      <div className="w-75 mx-auto d-flex justify-content-center row row-cols-lg-2 row-cols-md-2 row-cols-1 g-5">
        {jobs.map((job) => (
          <div className="">
            <div>
              <div class="filter-box">
                <h4 className="text-center" style={{ color: "brown" }}>
                  {job.job}
                </h4>
                <div className="px-2 mt-3">
                  <p className="">
                    <img
                      style={{ width: 50, height: 50, borderRadius: "50%" }}
                      src={job.image}
                      alt=""
                    />
                    <span className="company ps-2">{job.company}</span>
                  </p>

                  <p className="ps-3">
                    <ImLocation2 />
                    <span className="company ps-2"></span>
                    {job.jobLocation}
                  </p>
                  <p className="ps-3">
                    <MdCastForEducation />
                    <span className="company ps-2"></span>
                    {job.educationalRequirements}
                  </p>
                  <p className="ps-3">
                    <MdOutlineWork />
                    <span className="company ps-2"></span>
                    {job.experienceRequirements}
                  </p>
                  <p className="ps-3">
                    <SiWorkplace />
                    <span className="company ps-2"></span>
                    {job.employmentStatus}
                  </p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/jobdetails/${job._id}`}
                      >
                        <span
                          style={{
                            color: "brown",
                            fontSize: 23,
                          }}
                        >
                          Details
                          <AiOutlineArrowRight className="ps-1" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesJobs;
