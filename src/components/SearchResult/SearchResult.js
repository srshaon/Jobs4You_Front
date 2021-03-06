import "./SearchResult.css";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { FcCurrencyExchange } from "react-icons/fc";
import image from "../../assets/Images/job-board.jpg";

const SearchResult = () => {
  const [searchJobs, setSearchJobs] = useState([]);
  const { searchKey, setSearchKey, searchLocation, setSearchLocation } =
    useAuth();
  console.log("came from searchResult", searchKey, searchLocation);

  const resetKey = () => {
    setSearchKey("");
  };

  const resetLocation = () => {
    setSearchLocation("");
  };

  useEffect(() => {
    fetch("https://afternoon-headland-45054.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        var result = data.filter(
          (jobs) =>
            jobs.job.toLowerCase().includes(searchKey.toLowerCase()) &&
            jobs.jobLocation
              .toLowerCase()
              .includes(searchLocation.toLowerCase())
        );
        setSearchJobs(result);
        resetKey();
        resetLocation();
      });
  }, []);

  // if (searchJobs.length === 0) {
  //   return <Spinner animation="border" variant="danger" />;

  // }

  return (
    <>
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
              <div className="job-list-form">
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
              {searchJobs.length == 0 ? (
                <div>
                  <h1 className="text-center" style={{ color: "brown" }}>
                    No Result Found
                  </h1>
                </div>
              ) : (
                <div className="row d-md-flex align-items-center justify-content-center">
                  {searchJobs?.map((job) => (
                    <Link
                      className="job-list-link"
                      to={`/jobdetails/${job._id}`}
                    >
                      <article
                        className="job-list-article row align-items-center justify-content-center"
                        style={{ height: "170px", minHeight: "170px" }}
                      >
                        <Col md={6} className="d-md-flex align-items-center">
                          <img
                            src={job.image}
                            alt=""
                            className="w-25 p-4"
                            style={{ borderRadius: "150px" }}
                          />
                          <div className="">
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
                            <p>
                              {" "}
                              <ImLocation2 />
                              {job.jobLocation}
                            </p>
                          </div>
                        </Col>
                        <Col md={2}>{job.employmentStatus}</Col>
                        <Col md={2}>
                          <FcCurrencyExchange />
                          <span className="ps-1">{job.salary}</span>
                        </Col>
                        <Col md={2}>
                          <span style={{ fontWeight: "600", color: "brown" }}>
                            closing:
                          </span>{" "}
                          <br /> {job.applicationDeadline}
                        </Col>
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
