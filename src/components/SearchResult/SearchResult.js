import "./SearchResult.css";

import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const SearchResult = () => {
  const [searchJobs, setSearchJobs] = useState([]);


  const { searchKey, setSearchKey, searchLocation, setSearchLocation } = useAuth();
  console.log("came from searchResult", searchKey, searchLocation);


  const resetOne = () => {
    setSearchKey('')
  }
    ;
  const resetTwo = () => {
    setSearchLocation('')
  }
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        const a = data.filter(
          (jobs) =>
            jobs.category.toLowerCase().includes(searchKey.toLowerCase()) &&
            jobs.jobLocation.toLowerCase().includes(searchLocation.toLowerCase())

        );
        setSearchJobs(a);
        resetOne();
        resetTwo();
      }
      );
  }, []);
  console.log(searchJobs);
  return (
    <div>
      <h2>Search Result</h2>
    </div>
  );
};

export default SearchResult;
