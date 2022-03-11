import './Dashboard.css';

import React, { useState } from 'react';

import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import {
    CDBSidebar,

    CDBSidebarContent,

} from "cdbreact";
import LogIn from '../LogIn/LogIn';
import CompanyDetails from '../CompanyProfile/CompanyDetails'
import CompanyProfile from '../CompanyProfile/CompanyProfile'
import {useGetProfilesQuery,useGetCompaniesQuery } from '../../Redux-handler/ManageProfiles';
import CandidateDetails from '../CandidatesList/CandidateDetails';
import CandidatesList from '../CandidatesList/CandidatesList';
import PdfCreator from '../PdfCreator/PdfCreator';

const Dashboard = () => {
    const { logOut, admin,user} = useAuth();
    const [control, setControl] = useState("login")
    console.log(admin,user);
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

    if (admin === '') {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div >

            <div className="dashboard-details-div">
                <div  >
                    <div className="h-100">
                        <CDBSidebar className="w-100" textColor="#fff" backgroundColor="#333">


                            <CDBSidebarContent className="py-5">
                                {
                                    (admin === 'seeker') && (
                                        <div>


                                            <div>
                                                <li onClick={() => setControl("candiProfile")}
                                                    className="li py-3 px-3">
                                                    My Profile
                                                </li>
                                                <li onClick={() => setControl("companies")}
                                                    className="li py-3 px-3">
                                                    All-companies
                                                </li>
                                                <li onClick={() => setControl("EditProfile")}
                                                    className="li py-3 px-3">
                                                   Edit Profile
                                                </li>
                                                <li onClick={() => setControl("createResume")}
                                                    className="li py-3 px-3">
                                                    Create-Resume
                                                </li>
                                                <li onClick={logOut} className="li px-3 py-3">
                                                    Log Out
                                                </li>
                                            </div>
                                        </div>)
                                }
                                {
                                    (admin === 'company') && (
                                        <div>
                                            <div >
                                                <ul className="">
                                                    <li onClick={() => setControl("companyProfile")}
                                                        className="li  py-3">
                                                        My-profile
                                                    </li>
                                                    <li onClick={() => setControl("candidates")} className="li  py-3">
                                                        All-Candidates
                                                    </li>
                                                    <li onClick={() => setControl("Edit-Profile")} className="li  py-3">
                                                        Edit-Profile
                                                    </li>
                                                    <li onClick={logOut} className="li  py-3">
                                                        Log Out
                                                    </li>

                                                </ul>

                                            </div>
                                        </div>
                                    )
                                }
                            </CDBSidebarContent>

                        </CDBSidebar>
                    </div>
                </div>
                <div className="dashboard-second-container"  >

                    {control === "companyProfile" && <CompanyDetails info={company}/>}
                    {control === "companies" && <CompanyProfile/>}
                    {control === "candiProfile" && <CandidateDetails info={candidate}/>}
                    {control === "candidates" && <CandidatesList/>}
                    {/* {control === "companyProfile" && <CandidateDetails/>} */}
                    {control === "createResume" && <PdfCreator/>}
                    {/* {control === "pay" && <Pay></Pay>}
                    {control === "review" && <Review></Review>}
                    {control === "welcome" && <Welcome></Welcome>}
                    {control === "makeadmin" && <MakeAdmin></MakeAdmin>}
                    {control === "allorders" && <AllOrders></AllOrders>}
                    {control === "manageproducts" && <ManageProducts></ManageProducts>}
                    {control === "addnewproduct" && <AddNewProducts></AddNewProducts>} */}


                </div>
            </div>
        </div>
    );
};

export default Dashboard;