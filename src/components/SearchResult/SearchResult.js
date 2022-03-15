import "./SearchResult.css";

import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Col } from "react-bootstrap";

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
    fetch("http://localhost:5000/jobs")
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

  console.log(searchJobs);

  return (
    <div>
      <h2>Search Result</h2>
      <div>
        {searchJobs.map((jobs) => (
          <div className="row">
            <Col md={2}>{jobs.img}</Col>
            <Col md={6}>
              <h4>{jobs.job}</h4>
              <p>{jobs.category}</p>
              <p>{jobs.jobLocation}</p>
            </Col>
            <Col md={2}></Col>
            <Col md={2}></Col>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;