import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const Locations = ({ jobs }) => {
  return (
    <div className="category-container">
      <div className="cardbg">
        <div className="category-bg row row-cols-lg-3 row-cols-md-3 row-cols-1 gx-5 gy-4">
          {jobs.map((location) => (
            <div>
              <div className="box text-center p-2">
                <h3>
                  <Link
                    className="category-title"
                    to={`/locationjobs/${location.job}`}
                  >
                    {location.job}
                    <span className="jobcount ms-3">{location.totalJobs}</span>
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

export default Locations;
