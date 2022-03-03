import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Locations from "../Locations/Locations";
import JobStatus from "../JobStatus/JobStatus";
import { BiChevronDown } from "react-icons/bi";
import "./Filteredjobs.css";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const Filteredjobs = () => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [status, setStatus] = useState([]);
  const [control, setControl] = useState("categories");

  const filteredData = (collection, property) => {
    const newList = collection.map((item) => item[property]);
    const uniqueCollection = [...new Set(newList)];

    let jobList = [];
    for (let job of uniqueCollection) {
      const similarJobs = newList.filter(
        (item) => item?.toLowerCase() === job?.toLowerCase()
      );
      const jobData = {
        job: job,
        totalJobs: similarJobs.length,
      };
      jobList.push(jobData);
    }

    return jobList;
  };

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((res) => {
      const approvedJobs = res.data.filter(
        (job) => job?.status?.toLowerCase() === "approved"
      );

      setCategories(filteredData(approvedJobs, "category"));
      setLocations(filteredData(approvedJobs, "jobLocation"));
      setStatus(filteredData(approvedJobs, "employmentStatus"));
    });
  }, []);

  if (control.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div className="container">
      <div>
        <h2
          className="text-center"
          style={{
            color: "brown",
          }}
        >
          Find the right career for you
        </h2>
        <div className="my-4 text-center">
          <button
            className="px-3 py-2 button"
            onClick={() => setControl("categories")}
          >
            Categories
            <BiChevronDown style={{ fontSize: "30px", fontWeight: "900" }} />
          </button>
          <button
            className="px-3 py-2 button"
            onClick={() => setControl("locations")}
          >
            Locations
            <BiChevronDown style={{ fontSize: "30px", fontWeight: "900" }} />
          </button>
          <button
            className="px-3 py-2 button"
            onClick={() => setControl("status")}
          >
            Employment Status
            <BiChevronDown style={{ fontSize: "30px", fontWeight: "900" }} />
          </button>
        </div>
      </div>
      <div className="my-5">
        {control === "categories" && (
          <Categories jobs={categories}></Categories>
        )}
        {control === "locations" && <Locations jobs={locations}></Locations>}
        {control === "status" && <JobStatus jobs={status}></JobStatus>}
      </div>
    </div>
  );
};

export default Filteredjobs;
