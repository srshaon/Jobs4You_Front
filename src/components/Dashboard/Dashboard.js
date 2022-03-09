import './Dashboard.css';

import React, { useState } from 'react';

import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import {
    CDBSidebar,

    CDBSidebarContent,

} from "cdbreact";
import LogIn from '../LogIn/LogIn';
import Welcome from '../Welcome/Welcome';


const Dashboard = () => {
    const { logOut, admin } = useAuth();
    const [control, setControl] = useState("welcome")
    console.log(admin);

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
                                                <li onClick={() => setControl("welcome")}
                                                    className="li py-3 px-3">
                                                    View Profile
                                                </li>
                                                <li onClick={() => setControl("welcome")}
                                                    className="li py-3 px-3">
                                                    Edit Profile
                                                </li>
                                                <li onClick={() => setControl("welcome")}
                                                    className="li py-3 px-3">
                                                    Upload/View Resume
                                                </li>

                                                <li onClick={() => setControl("welcome")}
                                                    className="li py-3 px-3">
                                                    Applied Jobs
                                                </li>
                                                <li onClick={() => setControl("welcome")}
                                                    className="li py-3 px-3">
                                                    Upcoming Interviews
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
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        View Profile
                                                    </li>
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Edit Profile
                                                    </li>
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Posted Jobs
                                                    </li>

                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Upcoming Interviews
                                                    </li>
                                                    <li onClick={logOut} className="li px-3 py-3">
                                                        Log Out
                                                    </li>

                                                </ul>

                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    (admin === 'admin') && (
                                        <div>
                                            <div >
                                                <ul className="">
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Make Admin
                                                    </li>
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Candidates List
                                                    </li>
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Companies List
                                                    </li>
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Manage Jobs
                                                    </li>
                                                    <li onClick={() => setControl("welcome")}
                                                        className="li py-3 px-3">
                                                        Post Job
                                                    </li>
                                                    <li onClick={logOut} className="li px-3 py-3">
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

                    {control === "login" && <LogIn></LogIn>}
                    {control === "welcome" && <Welcome></Welcome>}

                    {/* {control === "pay" && <Pay></Pay>}
                    {control === "review" && <Review></Review>}
                    
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