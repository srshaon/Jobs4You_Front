import React from "react";
import { useGetCompaniesQuery } from "../../Redux-handler/ManageProfiles";
import { useParams, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import { Button, Col } from "react-bootstrap";
import "./CompanyInfo.css";

import {
  MdPeopleAlt,
  MdOutlineEmail,
  MdPlace,
  MdFoundation,
} from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { FaLink, FaBuilding } from "react-icons/fa";
import LineChart from "../LineChart/LineChart";

const CompanyInfo = ({ info }) => {
  const history = useHistory();
  const { user, admin } = useAuth();
  //   const{data}=useGetCompaniesQuery(undefined,{selectFromResult:({data})=>({data:data?.find(el=>el.email==user?.loginEmail),})

  // })
  const navigateToForm = () => {
    history.push("/profileForm");
  };
  console.log(info);

  return (
    <section>
      <div className="container">
        {/* <div className="card border-0">
          <div className="card-body text-center">
            <h5 className="my-3">{user?.displayName}</h5>
            <p className="text-muted mb-2">{user?.email}</p>
            <Button onClick={navigateToForm}>Complete Profile</Button>
          </div>
        </div> */}

        {info && (
          <div>
            <div className="row d-md-flex pt-3">
              <Col md={8} className="text-center">
                <div className="d-md-flex justify-content-center">
                  <div className="overview-card card p-4">
                    <h5>
                      Jobs Posted: <br />{" "}
                      <span
                        style={{
                          color: "brown",
                          fontSize: "30px",
                          fontWeight: "600",
                        }}
                      >
                        38
                      </span>
                    </h5>
                  </div>
                  <div className="overview-card card p-4">
                    <h5>
                      Applications: <br />{" "}
                      <span
                        style={{
                          color: "brown",
                          fontSize: "30px",
                          fontWeight: "600",
                        }}
                      >
                        750
                      </span>
                    </h5>
                  </div>
                  <div className="overview-card card p-4">
                    <h5>
                      Hired: <br />{" "}
                      <span
                        style={{
                          color: "brown",
                          fontSize: "30px",
                          fontWeight: "600",
                        }}
                      >
                        105
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <LineChart></LineChart>
                </div>
              </Col>

              <Col md={4} className="pt-3 mb-5">
                <h4 className="text-center" style={{ color: "white" }}>
                  Company Overview
                  <hr />
                </h4>
                <div className="profile-card card p-3 mx-3">
                  <div className="d-flex align-items-center mt-3 px-5">
                    <FaBuilding className="overview-icon" />
                    <p className="px-4 py-1">
                      <span style={{ fontWeight: "600" }}>Founded:</span> <br />{" "}
                      {info?.founded}{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center px-5">
                    <MdFoundation className="overview-icon" />
                    <p className="px-4 py-1">
                      <span style={{ fontWeight: "600" }}>Industry:</span>{" "}
                      <br /> {info?.industry}{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center px-5">
                    <MdPeopleAlt className="overview-icon" />
                    <p className="px-4 py-1">
                      <span style={{ fontWeight: "600" }}>Employees:</span>{" "}
                      <br /> {info?.noe}{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center px-5">
                    <MdPlace className="overview-icon" />
                    <p className="px-4 py-1">
                      <span style={{ fontWeight: "600" }}>Country:</span> <br />{" "}
                      {info?.country}{" "}
                    </p>
                  </div>
                </div>
              </Col>
            </div>
            <hr />
            <div className="pt-2 d-flex align-items-center justify-content-center ">
              <p className="network-text me-5 text-white">
                {" "}
                <a href={info?.website} rel="noopener noreferrer">
                  <FaLink className="network-icon me-1" />
                  website
                </a>{" "}
              </p>
              <p className="network-text me-5 text-white">
                <HiOutlinePhone className="network-icon me-1" />
                {info?.contact}
              </p>
              <p className="network-text me-5 text-white">
                <MdOutlineEmail className="network-icon me-1" /> {info?.email}
              </p>

              {/* <video width={250} height={200} controls>
                <source src={info?.videoUrl}></source>
              </video> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanyInfo;
