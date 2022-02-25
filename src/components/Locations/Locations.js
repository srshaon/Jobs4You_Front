import React, { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch("https://still-cliffs-68775.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        const LocationList = data.map((location) => location.jobLocation);

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
                    to={`/locationjobs/${location.locationName}`}
                  >
                    {location.locationName}
                    <span className="jobcount">{location.totaljobs}</span>
                    <MdDoubleArrow
                      className="ms-3"
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
