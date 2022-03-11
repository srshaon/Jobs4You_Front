import "./Dashboard.css";

import React, { useState } from "react";

import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { CDBSidebar, CDBSidebarContent } from "cdbreact";
import LogIn from "../LogIn/LogIn";
import Welcome from "../Welcome/Welcome";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCloudUpload, MdUpdate } from "react-icons/md";
import { SiWorkplace } from "react-icons/si";
import { FcCalendar, FcManager } from "react-icons/fc";
import { RiEdit2Fill, RiContactsLine } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io";

import Header from "../Header/Haeder";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  const [control, setControl] = useState("welcome");
  console.log(admin);

  if (admin === "") {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div
      className="card dashboard-sec"
      style={{ backgroundColor: "#9c9c9c60" }}
    >
      <div className="dashboard-details-div pb-5">
        <div className="w-100">
          <div className="h-100">
            <CDBSidebar
              className="w-100"

              // backgroundColor="#333"
            >
              <CDBSidebarContent className="dashboard py-5">
                {/* {admin === "seeker" && ( */}
                <div>
                  <div className="dashboard-list">
                    <li
                      onClick={() => setControl("welcome")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <CgProfile />
                      </span>{" "}
                      My Profile
                    </li>
                    <li
                      onClick={() => setControl("welcome")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <RiEdit2Fill />
                      </span>{" "}
                      Edit Profile
                    </li>
                    <li
                      onClick={() => setControl("welcome")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <MdOutlineCloudUpload />
                      </span>{" "}
                      Upload/View Resume
                    </li>

                    <li
                      onClick={() => setControl("welcome")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <SiWorkplace />
                      </span>{" "}
                      Applied Jobs
                    </li>
                    <li
                      onClick={() => setControl("welcome")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <FcCalendar />
                      </span>{" "}
                      Upcoming Interviews
                    </li>

                    <li onClick={logOut} className="li px-5 py-3">
                      <span className="dashboard-icons px-1">
                        <CgCloseO />
                      </span>{" "}
                      Log Out
                    </li>
                  </div>
                </div>
                {/* )} */}
                {admin === "company" && (
                  <div>
                    <div>
                      <ul className="dashboard-list">
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <CgProfile />
                          </span>{" "}
                          View Profile
                        </li>
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <RiEdit2Fill />
                          </span>{" "}
                          Edit Profile
                        </li>
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <SiWorkplace />
                          </span>{" "}
                          Posted Jobs
                        </li>

                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <FcCalendar />
                          </span>{" "}
                          Upcoming Interviews
                        </li>
                        <li onClick={logOut} className="li px-3 py-3">
                          <span className="dashboard-icons px-1">
                            <CgCloseO />
                          </span>{" "}
                          Log Out
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {admin === "admin" && (
                  <div>
                    <div>
                      <ul className="dashboard-list">
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <FcManager />
                          </span>
                          Make Admin
                        </li>
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <RiContactsLine />
                          </span>
                          Candidate List
                        </li>
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <HiOutlineOfficeBuilding />
                          </span>
                          Company List
                        </li>
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <MdUpdate />
                          </span>
                          Manage Jobs
                        </li>
                        <li
                          onClick={() => setControl("welcome")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <SiWorkplace />
                          </span>{" "}
                          Post Job
                        </li>
                        <li onClick={logOut} className="li px-3 py-3">
                          <span className="dashboard-icons px-1">
                            <CgCloseO />
                          </span>{" "}
                          Log Out
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
        </div>
        <div className="dashboard-second-container">
          {control === "login" && <LogIn></LogIn>}
          {control === "welcome" && <Welcome></Welcome>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
