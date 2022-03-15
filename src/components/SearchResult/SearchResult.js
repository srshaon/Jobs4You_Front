import "./SearchResult.css";

import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const SearchResult = () => {
  const [searchJobs, setSearchJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setSearchJobs(data));
  }, []);
  const { searchKey, setSearchKey, searchLocation, setSearchLocation, resetSearchKey, setResetSearchKey, resetSearchLocation, setResetSearchLocation } = useAuth();
  console.log("came from searchResult", searchKey, searchLocation, resetSearchKey, resetSearchLocation);
  // let searchFieldOne = '';
  // let searchFieldTwo = '';
  // if (resetSearchKey == 1) {
  //   searchFieldOne = searchKey;
  //   setResetSearchKey(0)
  // }
  // if (resetSearchLocation == 1) {
  //   searchFieldTwo = searchLocation;
  //   setResetSearchLocation(0);
  // }
  const searchFieldOne = searchKey;
  const searchFieldTwo = searchLocation;
  console.log(searchFieldOne, searchFieldTwo)
  const result = searchJobs.filter(
    (jobs) =>
      jobs.category.toLowerCase().includes(searchFieldOne.toLowerCase()) &&
      jobs.jobLocation.toLowerCase().includes(searchFieldTwo.toLowerCase())

  );
  console.log(result);
  const resetOne = () => {
    setSearchKey('')
  }
    ;
  const resetTwo = () => {
    setSearchLocation('')
  }

  return (
    <div>
      <h2>Search Result</h2>
    </div>
  );
};

export default SearchResult;
