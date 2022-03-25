import React from "react";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import "./Categories.css";

const Categories = ({ jobs }) => {
  // console.log(jobs);
  return (
    <div className="">
      <div className="cardbg">
        <div className="category-bg row row-cols-lg-3 row-cols-md-3 row-cols-1 d-flex  justify-content-center gx-5 gy-4">
          {jobs.map((category, index) => (
            <div key={index}>
              <div className="box text-center p-2">
                <h3>
                  <Link
                    className="category-title"
                    to={`/categoryjobs/${category.job}`}
                  >
                    {category.job}
                    <span className="jobcount ms-3">{category.totalJobs}</span>
                    {/* <MdDoubleArrow
                      className="ms-3"
                      style={{ color: "brown" }}
                    /> */}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
