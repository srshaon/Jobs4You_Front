// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
// import { FaFacebookF } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div>
//           <Row>
//             <Col>
//               <h4 className="" style={{ color: "black" }}>
//                 Jobs4You
//               </h4>
//             </Col>
//             <Col>
//               <h5>Information</h5>
//               <div>
//                 <Link to="/" className="py-1">
//                   About
//                 </Link>
//                 <Link to="/" className="py-1">
//                   Browse Jobs
//                 </Link>
//                 <Link to="/" className="py-1">
//                   FAQs
//                 </Link>
//                 <Link to="/" className="py-1">
//                   Terms &#38; Conditions
//                 </Link>
//                 <Link to="/" className="py-1">
//                   Privacy Policy
//                 </Link>
//               </div>
//             </Col>
//             <Col>
//               <h5>Employers</h5>
//               <div>
//                 <Link to="/" className="py-1">
//                   Free Account
//                 </Link>
//                 <Link to="/" className="py-1">
//                   Employer Center
//                 </Link>
//                 <Link to="/" className="py-1">
//                   Employers Blogs
//                 </Link>
//               </div>
//             </Col>
//             <Col>
//               <h5>Get Connected</h5>
//               <div className="social-icons d-flex">
//                 <a
//                   href="https://facebook.com"
//                   className="social_bg facebook-bg"
//                 >
//                   <FaFacebookF />
//                 </a>
//                 <a
//                   href="https://iastagram.com"
//                   className="social_bg instagram-bg"
//                 >
//                   <AiOutlineInstagram />
//                 </a>
//                 <a href="https://youtube.com" className="social_bg youtube-bg">
//                   <AiOutlineYoutube />
//                 </a>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </div>
//       <div className="copyright">
//         &copy; 2022 Nuzhat Parveen | All rights reserved{" "}
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// test comment

import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer >
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="footer">
        <div class="footer-hr ">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-50">
              <div class="single-icon mb-5">
                <ImLocation2 style={{ color: "red" }} className="send" />
                <div class="icon-text">
                  <h4>Find us</h4>
                  <span>Road-04, Rupnagar R/A, Mirpur, Dhaka</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-icon">
                <FaPhone style={{ color: "red" }} className="send" />
                <div class="icon-text">
                  <h4>Call us</h4>
                  <span>01700000000</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-icon">
                <AiTwotoneMail style={{ color: "red" }} className="send" />
                <div class="icon-text">
                  <h4>Mail us</h4>
                  <span>job4u@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        < div className="footerrow">
          <div className="footercol">
            <h1 className="logo">
              <span style={{ fontSize: "50px" }}>J</span>obs
              <span
                style={{
                  color: "orangered",
                  fontWeight: "900",
                  fontSize: "40px",
                }}
              >
                4
              </span>
              <span style={{ fontSize: "50px" }}>Y</span>ou
            </h1>

          </div>
          <div className="footercol">
            <h3 style={{ color: "cyan" }} >Useful Links
              <div className="underline"><span></span></div>
            </h3>

            <p>
              <Link style={{ color: "white", fontSize: 15 }} to="/" >
                Home
              </Link>
            </p>
            <p>
              <Link style={{ color: "white", fontSize: 15 }} to="/" >
                About
              </Link>
            </p>
            <p>
              <Link style={{ color: "white", fontSize: 15 }} to="/" >
                Browse Jobs
              </Link>
            </p>
            <p>
              <Link style={{ color: "white", fontSize: 15 }} to="/" >
                FAQs
              </Link>
            </p>
            <p>
              <Link style={{ color: "white", fontSize: 15 }} to="/" >
                Articles
              </Link>
            </p>
            <p>
              <Link style={{ color: "white", fontSize: 15 }} to="/" >
                Latest News
              </Link>
            </p>
            <p>
              <Link style={{ color: "white", fontSize: 15 }} to="/" >
                Terms &#38; Conditions
              </Link>
            </p>
          </div>
          <div className="footercol">
            <h3 style={{ color: "cyan" }}>Employers
              <div className="underline"><span></span></div>
            </h3>
            <div>
              <p>
                <Link style={{ color: "white", fontSize: 15 }} to="/" >
                  Free Account
                </Link>
              </p>
              <p>
                <Link style={{ color: "white", fontSize: 15 }} to="/" >
                  Employer Center
                </Link>
              </p>
              <p>
                <Link style={{ color: "white", fontSize: 15 }} to="/" >
                  Employers Blogs
                </Link>
              </p>
              <p>
                <Link style={{ color: "white", fontSize: 15 }} to="/" >
                  Free Account
                </Link>
              </p>
              <p>
                <Link style={{ color: "white", fontSize: 15 }} to="/" >
                  Employer Center
                </Link>
              </p>
              <p>
                <Link style={{ color: "white", fontSize: 15 }} to="/" >
                  Employers Blogs
                </Link>
              </p>
              <p>
                <Link style={{ color: "white", fontSize: 15 }} to="/" >
                  Employers Blogs
                </Link>
              </p>
            </div>
          </div>
          <div className="footercol">
            <h3 style={{ color: "cyan" }}>Subscribe
              <div className="underline"><span></span></div>
            </h3>
            <div className="">
              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div class="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><FiSend className="send" /></button>
              </form>
            </div>
            <h5 className="mt-3">Get Connected</h5>
            {/* <div className="social-icons mt-4 d-flex">
              <a
                href="https://facebook.com"
                className="social_bg facebook-bg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://iastagram.com"
                className="social_bg instagram-bg"
              >
                <AiOutlineInstagram />
              </a>
              <a href="https://youtube.com" className="social_bg youtube-bg">
                <AiOutlineYoutube />
              </a>
            </div> */}
            <div className="p-2">
              <a rel="noopener noreferrer" href="https://www.facebook.com" target="_blank">
                <i style={{ color: '#1877f2' }} className="m-1 fab fa-facebook-square fa-2x"></i></a>
              <a rel="noopener noreferrer" href="https://www.instagram.com" target="_blank">
                <i className="insta m-1 fab fa-instagram fa-2x"></i></a>

              <a rel="noopener noreferrer" href="https://www.pinterest.com/" target="_blank">
                <i style={{ color: '#E60023' }} className="m-1 fab fa-pinterest-square fa-2x"></i></a>

              <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank">
                <i style={{ color: '#00acee' }} className="m-1 fab fa-twitter-square fa-2x"></i></a>

              <a rel="noopener noreferrer" href="https://www.youtube.com/" target="_blank">
                <i style={{ color: '#c4302b' }} className="m-1 fab fa-youtube-square fa-2x"></i></a>
            </div>
          </div>



        </div>
      </div>
    </footer>
  );
};

export default Footer;
