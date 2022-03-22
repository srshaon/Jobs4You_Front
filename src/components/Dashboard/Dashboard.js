import "./Dashboard.css";

import React, { useState } from "react";

import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { CDBSidebar, CDBSidebarContent } from "cdbreact";
import LogIn from "../LogIn/LogIn";
import Welcome from "../Welcome/Welcome";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineCloudUpload,
  MdUpdate,
  MdCreateNewFolder,
  MdPeopleAlt,
} from "react-icons/md";
import { SiWorkplace } from "react-icons/si";
import { FcCalendar, FcManager, FcApproval } from "react-icons/fc";
import { RiEdit2Fill, RiContactsLine, RiDashboardFill } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io";

import Header from "../Header/Haeder";
import CompanyDetails from "../CompanyProfile/CompanyDetails";
import CompanyProfile from "../CompanyProfile/CompanyProfile";
import {
  useGetProfilesQuery,
  useGetCompaniesQuery,
} from "../../Redux-handler/ManageProfiles";
import CandidateDetails from "../CandidatesList/CandidateDetails";
import CandidatesList from "../CandidatesList/CandidatesList";
import PdfCreator from "../PdfCreator/PdfCreator";
import CompanyInfo from "../CompanyProfile/CompanyInfo";
import UploadViewResume from "../UploadViewResume/UploadViewResume";
import MyJobs from "../Myjobs/MyJobs";
import ProfileEdit from "./../ProfileForm/ProfileEdit";
import { ImHome, ImStatsBars } from "react-icons/im";
import { useHistory } from "react-router";
import Skills from "../Skills/Skills";
import AddJob from "../AddJob/AddJob";
import ManageJobs from "../ManageJobs/ManageJobs";
import EditCompany from "../CompanyProfile/EditCompany";
import AllJobStatus from "./../AllJobStatus/AllJobStatus";
import AccountForm from "../ProfileForm/AccountForm";
import AllJobs from "../AllJobs/AllJobs";

const Dashboard = () => {
  const history = useHistory();
  const { logOut, admin, user, role, setRole, control, setControl } = useAuth();
  console.log(user);
  console.log("this is role:", role);
  // const [control, setControl] = useState("welcome");
  console.log(admin);
  const { data: candidate } = useGetProfilesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el) => el.loginEmail == user?.email),
    }),
  });
  const { data: company } = useGetCompaniesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((el) => el.loginEmail == user?.email),
    }),
  });
  let profileInfo;
  if (role === "seeker") {
    profileInfo = candidate;
    // setControl("candiProfile");
  } else if (role === "company") {
    profileInfo = company;
    // setControl("companyProfile");
  }
  console.log(profileInfo);

  if (role === "") {
    return <Spinner animation="border" variant="danger" />;
  }
  const navigateToHome = () => {
    history.push("/home");
  };
  return (
    <div className="card dashboard-sec" style={{ overflow: "scroll initial" }}>
      <div className="dashboard-details-div">
        <div className="w-100">
          <div className="">
            <CDBSidebar
              className="w-100"
              style={{
                height: "100vh",
                background: "var(--color-primary)",
              }}
            >
              <CDBSidebarContent className="dashboard py-5">
                {role === "seeker" && (
                  <div>
                    <div className="dashboard-list">
                      <h4
                        className="px-5 text-center"
                        style={{
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        Job Seeker <br />{" "}
                        <span style={{ fontSize: "18px" }}>Dashboard</span>
                        <hr />
                      </h4>

                      <li onClick={navigateToHome} className="li py-3 px-5">
                        <span className="dashboard-icons px-1">
                          <ImHome />
                        </span>{" "}
                        Home
                      </li>
                      <li
                        onClick={() => setControl("createProfile")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <MdCreateNewFolder />
                        </span>{" "}
                        Create Profile
                      </li>
                      <li
                        onClick={() => setControl("candiProfile")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <CgProfile />
                        </span>{" "}
                        My Profile
                      </li>

                      <li
                        onClick={() => setControl("editCandidate")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <RiEdit2Fill />
                        </span>{" "}
                        Edit Profile
                      </li>
                      <li
                        onClick={() => setControl("createResume")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <MdCreateNewFolder />
                        </span>{" "}
                        Create Resume
                      </li>
                      <li
                        onClick={() => setControl("upload")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <MdOutlineCloudUpload />
                        </span>{" "}
                        Upload/View Resume
                      </li>
                      <li
                        onClick={() => setControl("skills")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <ImStatsBars />
                        </span>{" "}
                        Skills
                      </li>
                      <li
                        onClick={() => setControl("myjobs")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <SiWorkplace />
                        </span>{" "}
                        My Jobs
                      </li>

                      {/* <li
                        onClick={() => setControl("welcome")}
                        className="li py-3 px-5"
                      >
                        <span className="dashboard-icons px-1">
                          <FcCalendar />
                        </span>{" "}
                        Upcoming Interviews
                      </li> */}

                      <li onClick={logOut} className="li px-5 py-3">
                        <span className="dashboard-icons px-1">
                          <CgCloseO />
                        </span>{" "}
                        Log Out
                      </li>
                    </div>
                  </div>
                )}
                {role === "company" && (
                  <div>
                    <div className="text-center pt-4">
                      <h4
                        className="px-5 text-center"
                        style={{
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        Employer <br />{" "}
                        <span style={{ fontSize: "18px" }}>Dashboard</span>
                        <hr />
                      </h4>
                    </div>

                    <div className="pt-4">
                      <ul className="dashboard-list">
                        <li onClick={navigateToHome} className="li py-3 px-3">
                          <span className="dashboard-icons px-2">
                            <ImHome />
                          </span>{" "}
                          Home
                        </li>
                        <li
                          onClick={() => setControl("createProfile")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-2">
                            <CgProfile />
                          </span>{" "}
                          Create Profile
                        </li>
                        <li
                          onClick={() => setControl("companyProfile")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-2">
                            <CgProfile />
                          </span>{" "}
                          View Profile
                        </li>

                        <li
                          onClick={() => setControl("editCompany")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-2">
                            <RiEdit2Fill />
                          </span>{" "}
                          Update Profile
                        </li>
                        <li
                          onClick={() => setControl("postJob")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-2">
                            <SiWorkplace />
                          </span>{" "}
                          Post Job
                        </li>

                        <li
                          onClick={() => setControl("manageJobs")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-2">
                            <FcApproval />
                          </span>{" "}
                          Manage Jobs
                        </li>

                        <li
                          onClick={() => setControl("candidates")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-2">
                            <MdPeopleAlt />
                          </span>{" "}
                          Candidates
                        </li>

                        {/* <li
                          onClick={() => setControl("interveiw")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <FcCalendar />
                          </span>{" "}
                          Upcoming Interviews
                        </li> */}
                        <li onClick={logOut} className="li px-3 py-3">
                          <span className="dashboard-icons px-2">
                            <CgCloseO />
                          </span>{" "}
                          Log Out
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {role === "admin" && (
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
          <div
            className="welcome-dashboard d-md-flex align-items-center"
            style={{ height: "18vh" }}
          >
            {user.photoURL ? (
              <img
                src={user?.photoURL}
                alt=""
                className="ms-5 me-3"
                style={{ height: "13vh", borderRadius: "100px" }}
              />
            ) : (
              <img
                src={profileInfo?.img}
                alt=""
                className="ms-5 me-3"
                style={{ height: "13vh", borderRadius: "100px" }}
              />
            )}
            <h4 className="dashboard-title" style={{ color: "brown" }}>
              {user.displayName}
            </h4>
          </div>
          <hr className="m-0" />

          <div className="dashboard-content mt-3 mx-auto">
            {control === "candiProfile" && (
              <CandidateDetails info={profileInfo} />
            )}
            {control === "editCandidate" && (
              <ProfileEdit info={profileInfo} setControl={setControl} />
            )}
            {control === "createResume" && <PdfCreator />}
            {control === "login" && <LogIn></LogIn>}
            {control === "welcome" && <Welcome></Welcome>}
            {control === "upload" && <UploadViewResume />}
            {control === "myjobs" && <MyJobs />}
            {control === "skills" && <Skills />}
            {control === "createProfile" && <AccountForm />}
            {/* recruiter dashboard */}
            {control === "companyProfile" && <CompanyInfo info={profileInfo} />}
            {control === "companies" && <CompanyProfile />}
            {control === "postJob" && <AddJob profileInfo={profileInfo} />}
            {control === "candidates" && <CandidatesList />}
            {control === "manageJobs" && <ManageJobs />}
            {control === "editCompany" && <EditCompany info={profileInfo} />}
            {control === `/alljobs/:jobId` && <AllJobs></AllJobs>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
