import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Company.css";

const Company = (props) => {
  const { name, year, postedJob, hired, review, img } = props.company;
  return (
    <Col>
      <div className="company-card mx-auto">
        <div className="company-img d-md-flex align-items-center justify-content-center text-center">
          <div className="company-img-bg">
            <h4 className="mb-3">{name}</h4>
            <img src={img} alt="" className="card__image w-50 mx-auto" />
          </div>
          <div className="card__overlay w-100">
            <div className="overlay__text">
              <p>Founded: {year}</p>
              <p>Job Posted: {postedJob}</p>
              <p>Total hired: {hired}</p>
              <p>Review: {review}</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Company;
