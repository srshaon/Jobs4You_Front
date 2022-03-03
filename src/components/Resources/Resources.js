import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    fetch("./data-json/resources.json")
      .then((res) => res.json())
      .then((data) => setResources(data));
  }, []);
  return (
    <div className="container">
      <div className="">
        <div className="text-center">
          <h2 className="" style={{ fontSize: "35px", color: "brown" }}>
            Resources
          </h2>
          <div className="row d-flex justify-content-center mt-4">
            {resources.map((resource) => {
              return (
                <div
                  key={resource?.id}
                  className="col-lg-4 col-sm-6 col-12 mb-sm-4 mb-0"
                >
                  <Link
                    style={{ color: "unset", textDecoration: "none" }}
                    to={`/resource/${resource?.id}`}
                  >
                    <div>
                      <div className="d-flex">
                        <img
                          className="w-100"
                          style={{
                            opacity: "0.4",
                          }}
                          src={resource?.img}
                          alt=""
                        />
                      </div>
                      <h5 className="pt-4">{resource?.title}</h5>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
