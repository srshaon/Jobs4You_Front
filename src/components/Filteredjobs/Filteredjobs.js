import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import Locations from "../Locations/Locations";
import JobStatus from "../JobStatus/JobStatus";
import { BiChevronDown } from "react-icons/bi";
import "./Filteredjobs.css";
import { Spinner } from "react-bootstrap";

const Filteredjobs = () => {
  const [control, setControl] = useState("categories");
  if (control.length === 0) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div className="container browse-window">
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
        {control === "categories" && <Categories></Categories>}
        {control === "locations" && <Locations></Locations>}
        {control === "status" && <JobStatus></JobStatus>}
      </div>
    </div>
  );
};

export default Filteredjobs;
