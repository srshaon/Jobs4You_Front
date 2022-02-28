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

  useEffect(() => {
    axios.get("https://still-cliffs-68775.herokuapp.com/jobs").then((res) => {
      const approvedJobs = res.data.filter(
        (job) => job?.status?.toLowerCase() === "approved"
      );
      // console.log(res.data);

      const categoryList = approvedJobs?.map((category) => category.category);
      const uniqueCategories = [...new Set(categoryList)];

      let categoriesJobsList = [];
      for (let categoryName of uniqueCategories) {
        const similarCategories = categoryList.filter(
          (category) => category === categoryName
        );
        const jobCategory = {
          categoryName: categoryName,
          totaljobs: similarCategories.length,
        };
        categoriesJobsList.push(jobCategory);
      }
      setCategories(categoriesJobsList);

      const LocationList = approvedJobs?.map(
        (location) => location.jobLocation
      );
      const uniqueLocations = [...new Set(LocationList)];
      let locationJobList = [];
      for (let locationName of uniqueLocations) {
        const similarlocation = LocationList.filter(
          (location) => location === locationName
        );
        const jobLocation = {
          locationName: locationName,
          totaljobs: similarlocation.length,
        };
        locationJobList.push(jobLocation);
      }
      setLocations(locationJobList);

      const statusList = approvedJobs?.map((status) => status.employmentStatus);
      const uniqueStatus = [...new Set(statusList)];
      let statusJobList = [];
      for (let statusName of uniqueStatus) {
        const similarStatus = statusList.filter(
          (status) => status === statusName
        );
        const jobLocation = {
          statusName: statusName,
          totaljobs: similarStatus.length,
        };
        statusJobList.push(jobLocation);
      }
      setStatus(statusJobList);
    });
  }, []);

  if (control.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div className="browse-window">
      <div className="text-center">
        <h2 style={{ fontSize: "35px", color: "brown" }}>
          Extend your job search with Jobs4You
        </h2>
        <div className="py-4">
          <button
            className="p-2 button"
            onClick={() => setControl("categories")}
          >
            Categories
            <BiChevronDown style={{ fontSize: "30px", fontWeight: "900" }} />
          </button>
          <button
            className="p-2 button"
            onClick={() => setControl("locations")}
          >
            Locations
            <BiChevronDown style={{ fontSize: "30px", fontWeight: "900" }} />
          </button>
          <button className="p-2 button" onClick={() => setControl("status")}>
            Employment Status
            <BiChevronDown style={{ fontSize: "30px", fontWeight: "900" }} />
          </button>
        </div>
      </div>
      <div>
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
