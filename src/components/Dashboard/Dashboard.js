
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
import CompanyDetails from '../CompanyProfile/CompanyDetails'
import CompanyProfile from '../CompanyProfile/CompanyProfile'
import {useGetProfilesQuery,useGetCompaniesQuery } from '../../Redux-handler/ManageProfiles';
import CandidateDetails from '../CandidatesList/CandidateDetails';
import CandidatesList from '../CandidatesList/CandidatesList';
import PdfCreator from '../PdfCreator/PdfCreator';
import CompanyInfo from'../CompanyProfile/CompanyInfo';
import UploadViewResume from '../UploadViewResume/UploadViewResume';
import MyJobs from '../Myjobs/MyJobs'

const Dashboard = () => {
  const { logOut, admin ,user} = useAuth();
  const [control, setControl] = useState("welcome");
  console.log(admin);
  const{data:candidate}=useGetProfilesQuery(undefined,{selectFromResult:({data})=>({data:data?.find(el=>el.loginEmail==user?.email),})
})
const{data:company}=useGetCompaniesQuery(undefined,{selectFromResult:({data})=>({data:data?.find(el=>el.loginEmail==user?.email),})
})
let profileInfo;
if(admin==='seeker'){
profileInfo=candidate
}else{
    profileInfo=company
}
    console.log(profileInfo)

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
                {admin === "seeker" && (
                <div>
                  <div className="dashboard-list">
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
                      onClick={() => setControl("companies")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <RiEdit2Fill />
                      </span>{" "}
                      Edit Profile
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
                      onClick={() => setControl("myjobs")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <MdOutlineCloudUpload />
                      </span>{" "}
                      My Jobs
                    </li>

                    <li
                      onClick={() => setControl("createResume")}
                      className="li py-3 px-5"
                    >
                      <span className="dashboard-icons px-1">
                        <SiWorkplace />
                      </span>{" "}
                      Create Resume
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
                </div>)}
                
                {(admin === "company") && (
                  <div>
                    <div>
                      <ul className="dashboard-list">
                        <li
                          onClick={() => setControl("companyProfile")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <CgProfile />
                          </span>{" "}
                          View Profile
                        </li>
                        <li
                          onClick={() => setControl("companyProfile")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <RiEdit2Fill />
                          </span>{" "}
                         Companies
                        </li>
                        <li
                          onClick={() => setControl("candidates")}
                          className="li py-3 px-3"
                        >
                          <span className="dashboard-icons px-1">
                            <SiWorkplace />
                          </span>{" "}
                          Candidates
                        </li>

                        <li
                          onClick={() => setControl("editProfile")}
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
        {control === "companyProfile" && <CompanyInfo info={company}/>}
                    {control === "companies" && <CompanyProfile/>}
                    {control === "candiProfile" && <CandidateDetails info={candidate}/>}
                    {control === "candidates" && <CandidatesList/>}
                    {/* {control === "companyProfile" && <CandidateDetails/>} */}
                    {control === "createResume" && <PdfCreator/>}
          {control === "login" && <LogIn></LogIn>}
          {control === "welcome" && <Welcome></Welcome>}
          {control === "upload" && <UploadViewResume/>}
          {control === "myjobs" && <MyJobs/>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
