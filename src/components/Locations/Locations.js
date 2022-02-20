import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://still-cliffs-68775.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        const LocationList = data.map((location) => location.jobLocation);
        const uniqueLocations = [...new Set(LocationList)];
        setLocations(uniqueLocations);
      });
  }, []);

  return (
    <div className="category-container">
      <div className="cardbg">
        <div className="category-bg row row-cols-lg-3 row-cols-md-3 row-cols-1">
          {locations.map((location) => (
            <div>
              <div className="box text-center my-3">
                <h3>
                  <Link
                    className="category-title"
                    to={`/locationjobs/${location}`}
                  >
                    {location}
                    <FiChevronRight
                      className="ms-4"
                      style={{ color: "brown" }}
                    />
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
