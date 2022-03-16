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
} from "react-icons/md";
import { SiWorkplace } from "react-icons/si";
import { FcCalendar, FcManager } from "react-icons/fc";
import { RiEdit2Fill, RiContactsLine } from "react-icons/ri";
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
const Dashboard = () => {
  const history = useHistory();
  const { logOut, admin, user } = useAuth();
  const [control, setControl] = useState("welcome");
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
  if (admin === "seeker") {
    profileInfo = candidate;
  } else {
    profileInfo = company;
  }
  console.log(profileInfo);

  if (admin === "") {
    return <Spinner animation="border" variant="danger" />;
  }
  const navigateToHome = () => {
    history.push("/home");
  };
  return (
    <div
      className="card dashboard-sec pb-5"
      // style={{ backgroundColor: "#9c9c9c60" }}
    >
      <div className="dashboard-details-div">
        <div className="w-100">
          <div className="h-100">
            <CDBSidebar
              className="w-100"
              style={{ height: "80vh", background: "var(--color-primary)" }}

              // backgroundColor="#333"
            >
              <CDBSidebarContent className="dashboard py-5">
                {admin === "seeker" && (
                  <div>
                    <div className="dashboard-list">
                      <li onClick={navigateToHome} className="li py-3 px-5">
                        <span className="dashboard-icons px-1">
                          <ImHome />
                        </span>{" "}
                        Home
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
                )}
                {admin === "company" && (
                  <div>
                    <div>
                      <ul className="dashboard-list">
                        <li onClick={navigateToHome} className="li py-3 px-3">
                          <span className="dashboard-icons px-2">
                            <ImHome />
                          </span>{" "}
                          Home
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
                            <ImStatsBars />
                          </span>{" "}
                          Manage Jobs
                        </li>

                        <li
                          onClick={() => setControl("candidates")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-2">
                            <SiWorkplace />
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
          {control === "candiProfile" && (
            <CandidateDetails info={profileInfo} />
          )}
          {control === "editCandidate" && <ProfileEdit info={profileInfo} />}
          {control === "createResume" && <PdfCreator />}
          {control === "login" && <LogIn></LogIn>}
          {control === "welcome" && <Welcome></Welcome>}
          {control === "upload" && <UploadViewResume />}
          {control === "myjobs" && <MyJobs />}
          {control === "skills" && <Skills />}
          {/* recruiter dashboard */}
          {control === "companyProfile" && <CompanyInfo info={profileInfo} />}
          {control === "companies" && <CompanyProfile />}
          {control === "postJob" && <AddJob />}
          {control === "candidates" && <CandidatesList />}
          {control === "manageJobs" && <ManageJobs />}
          {control === "editCompany" && <EditCompany info={profileInfo} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
