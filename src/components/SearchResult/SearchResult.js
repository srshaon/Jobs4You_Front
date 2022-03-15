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
  const { searchKey, searchLocation } = useAuth();
  console.log("came from searchResult", searchKey, searchLocation);

  const result = searchJobs.filter(
    (jobs) =>
      jobs.category.toLowerCase().includes(searchKey.toLowerCase()) &&
      jobs.jobLocation.toLowerCase().includes(searchLocation.toLowerCase())
  );
  console.log(result);

  return (
    <div>
      <h2>Search Result</h2>
    </div>
  );
};

export default SearchResult;
