import React from "react";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import "./Categories.css";

const Categories = ({ jobs }) => {
  return (
    <div className="category-container">
      <div className="cardbg">
        <div className="category-bg row row-cols-lg-3 row-cols-md-3 row-cols-1 d-flex justify-content-center">
          {jobs.map((category, index) => (
            <div key={index}>
              <div class="box text-center my-3">
                <h3>
                  <Link
                    className="category-title"
                    to={`/categoryjobs/${category.categoryName}`}
                  >
                    {category.categoryName}
                    <span className="jobcount">{category.totaljobs}</span>
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

export default Categories;
