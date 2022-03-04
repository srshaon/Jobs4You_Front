import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import {
  AiOutlineYoutube,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaAt, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import footer from "../../assets/Images/banner.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div
            className="card footer-card mb-3"
            // style={{ border: "2px solid red" }}
          >
            <div className="card-body">
              <Row className="m-4 align-items-center text-center">
                <Col>
                  <FaPhoneAlt className="footer-icon" />
                  <p
                    style={{
                      color: "white",
                      fontSize: "18px",
                    }}
                  >
                    +0001111
                  </p>
                </Col>
                <Col>
                  <FaAt className="footer-icon" />
                  <p style={{ color: "white", fontSize: "18px" }}>
                    jobs4you@email.com
                  </p>
                </Col>
                <Col>
                  <FaMapMarkerAlt className="footer-icon" />
                  <p style={{ color: "white", fontSize: "18px" }}>
                    California, USA
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <Row>
              <Col md={3}>
                <div>
                  <h5>Exploring --</h5>
                  <span className="animate-border border-black"></span>
                </div>
                <img
                  src={footer}
                  alt=""
                  className="footer-img w-75 mt-5"
                  data-aos="zoom-in-down"
                  data-aos-duration="2000"
                />
              </Col>
              <Col md={3} className="">
                <div>
                  <h5>Information</h5>
                  <span className="animate-border border-black"></span>
                </div>
                <div className="footer-list mt-3">
                  <Link to="/about">About</Link>
                  <Link to="/faq">FAQs</Link>
                  <Link to="/terms&conditions">Terms &#38; Conditions</Link>
                  <Link to="/policy">Privacy Policy</Link>

                  {/* <a href="#about">About</a>
                  <a href="#faq">FAQs</a>
                  <a href="#terms&conditions">Terms &#38; Conditions</a>
                  <a href="#policy">Privacy Policy</a> */}
                </div>
              </Col>
              <Col md={3} className="">
                <div>
                  <h5>Company</h5>
                  <span className="animate-border border-black"></span>
                </div>
                <div className="footer-list mt-3">
                  <Link to="/services">Our Services</Link>
                  <Link to="/clients">Clients</Link>
                  <Link to="/blogs">Employers' Blog</Link>
                  <Link to="/contact">Contact</Link>
                  {/* <a href="#services">Our Services</a>
                  <a href="#clients">Clients</a>
                  <a href="#blogs">Employers Blogs</a>
                  <a href="#contact">Contact</a> */}
                </div>
              </Col>

              <Col md={3} className="">
                <div>
                  <h5>Subscribe</h5>
                  <span className="animate-border border-black"></span>
                </div>
                <div>
                  <form action="" className="d-md-flex mt-4">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email address"
                      className="subscribe-field ps-3"
                    />
                    <button type="submit" className="subscribe-btn">
                      <FaPaperPlane style={{ color: "white" }} />
                    </button>
                  </form>
                </div>
                <p className="mt-2">Get digital updates in your mailbox</p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="col-md-6">
                <span>
                  &copy; 2022 <span style={{ color: "brown" }}>Team Alpha</span>{" "}
                  | All rights reserved
                </span>
              </div>

              <div className="col-md-6">
                <div className="social-icons d-flex justify-content-center">
                  <a
                    href="https://facebook.com"
                    className="social_bg facebook-bg"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    className="social_bg instagram-bg"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/"
                    className="social_bg instagram-bg"
                  >
                    <AiFillTwitterCircle />
                  </a>
                  <a
                    href="https://youtube.com"
                    className="social_bg youtube-bg"
                  >
                    <AiOutlineYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
