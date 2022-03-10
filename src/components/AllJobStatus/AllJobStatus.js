import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ImLocation2 } from "react-icons/im";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SiWorkplace } from "react-icons/si";
import { FcCurrencyExchange } from "react-icons/fc";
import { Col } from "react-bootstrap";
import image from "../../assets/Images/job-board.jpg";

const AllJobStatus = () => {
  const { statusName } = useParams();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterstatus = data.filter(
          (status) => status.employmentStatus === statusName
        );
        setJobs(filterstatus);
      });
  }, []);
  return (
    <div className="pb-5" style={{ backgroundColor: "#9c9c9c60" }}>
      <div
        className="list-sec-banner d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "var(--color-primary-light)",
          height: "50vh",
        }}
      >
        <img src={image} alt="" className="w-50 p-3" />
      </div>

      <div className="container py-5">
        <div className="row">
          <Col md={4}>
            <h4 className="p-3">Jobs by Filter</h4>
            <div className="job-list-form px-3">
              <form action="">
                <input type="text" name="" id="" placeholder="Locations" />{" "}
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Preference"
                />{" "}
                <br />
                <input type="text" name="" id="" placeholder="Category" />
              </form>
            </div>
          </Col>
          <Col md={8}>
            <div className="row d-md-flex align-items-center justify-content-center ">
              {jobs.map((job) => (
                <Link className="job-list-link" to={`/jobdetails/${job._id}`}>
                  <article
                    className="job-list-article row align-items-center justify-content-center"
                    style={{ height: "170px", minHeight: "170px" }}
                  >
                    <Col md={5} className="d-md-flex">
                      <img
                        src={job.image}
                        alt=""
                        className="p-3"
                        style={{ borderRadius: "100px" }}
                      />
                      <div className="ps-3">
                        <p
                          style={{
                            color: "brown",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          <u>{job.job}</u>
                        </p>
                        <h6>{job.company}</h6>
                        <p>{job.jobLocation}</p>
                      </div>
                    </Col>
                    <Col md={2}>{job.employmentStatus}</Col>
                    <Col md={3}>
                      <FcCurrencyExchange />
                      <span className="ps-1">{job.salary}</span>
                    </Col>
                    <Col md={2}>closing: {job.applicationDeadline}</Col>
                  </article>
                </Link>
              ))}
            </div>
          </Col>
        </div>
      </div>
    </div>
    // <div className="main-container">
    //   <div className="w-75 mx-auto d-flex justify-content-center row row-cols-lg-2 row-cols-md-2 row-cols-1 g-5">
    //     {jobs.map((job) => (
    //       <div className="">
    //         <div class="">
    //           <div class="filter-box">
    //             <h4 className="text-center" style={{ color: "brown" }}>
    //               {job.job}
    //             </h4>
    //             <div className="px-2 mt-3">
    //               <p className="">
    //                 <img
    //                   style={{ width: 50, height: 50, borderRadius: "50%" }}
    //                   src={job.image}
    //                   alt=""
    //                 />
    //                 <span className="company ps-2">{job.company}</span>
    //               </p>

    //               <p className="ps-3">
    //                 <ImLocation2 />
    //                 <span className="company ps-2"></span>
    //                 {job.jobLocation}
    //               </p>
    //               <p className="ps-3">
    //                 <MdCastForEducation />
    //                 <span className="company ps-2"></span>
    //                 {job.educationalRequirements}
    //               </p>
    //               <p className="ps-3">
    //                 <MdOutlineWork />
    //                 <span className="company ps-2"></span>
    //                 {job.experienceRequirements}
    //               </p>
    //               <p className="ps-3">
    //                 <SiWorkplace />
    //                 <span className="company ps-2"></span>
    //                 {job.employmentStatus}
    //               </p>
    //               <div className="d-flex justify-content-between">
    //                 <div>
    //                   <img
    //                     src="https://assets.codepen.io/2301174/icon-supervisor.svg"
    //                     alt=""
    //                   />
    //                 </div>
    //                 <div className="">
    //                   <Link
    //                     style={{ textDecoration: "none" }}
    //                     to={`/jobdetails/${job._id}`}
    //                   >
    //                     <span
    //                       style={{
    //                         color: "brown",
    //                         fontSize: 23,
    //                       }}
    //                     >
    //                       Details
    //                       <AiOutlineArrowRight className="ps-1" />
    //                     </span>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default AllJobStatus;
