import React from "react";
import MobileView from "../../assets/Images/view-mobile.png";
import Resources from "../Resources/Resources";
import Review from "../Review/Review";
import "./About.css";

const About = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="mb-5">
          <div className="text-center mb-5 pb-3">
            <h1 style={{ color: "brown" }}>
              Grow Your Career and Business via Jobs4You
            </h1>
          </div>

          <div>
            <div>
              <div className="d-flex align-items-center row">
                <div className="col-lg-4 col-12">
                  <div className="d-flex custom-sqeeze-left my-3 p-3 bg-light">
                    <div style={{ color: "#393975" }} className="me-3 mt-2">
                      <i className="fs-1 fa-regular fa-bell mt-1"></i>
                    </div>
                    <div>
                      <p className="mb-1 mt-2">
                        <strong>Stay updated</strong>
                      </p>
                      <p>
                        We let you know as soon as a matching job comes up, so
                        you know what roles are out there, and can apply with a
                        simple click.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex custom-sqeeze-left my-3 p-3 bg-light">
                    <div style={{ color: "#393975" }} className="me-3 mt-2">
                      <i className="fs-1 fa-regular fa-bell mt-1"></i>
                    </div>
                    <div>
                      <p className="mb-1 mt-2">
                        <strong>Stay updated</strong>
                      </p>
                      <p>
                        We let you know as soon as a matching job comes up, so
                        you know what roles are out there, and can apply with a
                        simple click.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex custom-sqeeze-left my-3 p-3 bg-light">
                    <div style={{ color: "#393975" }} className="me-3 mt-2">
                      <i className="fs-1 fa-regular fa-bell mt-1"></i>
                    </div>
                    <div>
                      <p className="mb-1 mt-2">
                        <strong>Stay updated</strong>
                      </p>
                      <p>
                        We let you know as soon as a matching job comes up, so
                        you know what roles are out there, and can apply with a
                        simple click.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="d-flex justify-content-center">
                    <img
                      style={{ height: "80vh", marginTop: "-50px" }}
                      className="mb-auto"
                      src={MobileView}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-12">
                  <div className="d-flex custom-sqeeze-right my-3 p-3 bg-light">
                    <div style={{ color: "#393975" }} className="me-3 mt-2">
                      <i className="fs-1 fa-regular fa-bell mt-1"></i>
                    </div>
                    <div>
                      <p className="mb-1 mt-2">
                        <strong>Stay updated</strong>
                      </p>
                      <p>
                        We let you know as soon as a matching job comes up, so
                        you know what roles are out there, and can apply with a
                        simple click.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex custom-sqeeze-right my-3 p-3 bg-light">
                    <div style={{ color: "#393975" }} className="me-3 mt-2">
                      <i className="fs-1 fa-regular fa-bell mt-1"></i>
                    </div>
                    <div>
                      <p className="mb-1 mt-2">
                        <strong>Stay updated</strong>
                      </p>
                      <p>
                        We let you know as soon as a matching job comes up, so
                        you know what roles are out there, and can apply with a
                        simple click.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex custom-sqeeze-right my-3 p-3 bg-light">
                    <div style={{ color: "#393975" }} className="me-3 mt-2">
                      <i className="fs-1 fa-regular fa-bell mt-1"></i>
                    </div>
                    <div>
                      <p className="mb-1 mt-2">
                        <strong>Stay updated</strong>
                      </p>
                      <p>
                        We let you know as soon as a matching job comes up, so
                        you know what roles are out there, and can apply with a
                        simple click.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 py-3">
          <Resources></Resources>
        </div>
        <div className="mb-5 pb-3">
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default About;
