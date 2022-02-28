import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import ProfileForm from "./ProfileForm";
import ProfileForm2 from "./ProfileForm2";

import Result from "./Result";
import ProfileForm3 from "./ProfileForm3";
import FinalResult from "./FinalResult";
import Home from "../Home/Home";

createStore({
    data: {}
});

const AccountForm = () => {
    return (
        <div>
            <StateMachineProvider>


                <Router>
                    <Route path="/profileForm" component={ProfileForm} />
                    <Route path="/profileForm2" component={ProfileForm2} />
                    <Route path="/profileForm3" component={ProfileForm3} />
                    <Route path="/result" component={Result} />
                    <Route path="/finalResult" component={FinalResult} />
                    <Route path="/home" component={Home} />
                </Router>
            </StateMachineProvider>
        </div>
    );
};

export default AccountForm;