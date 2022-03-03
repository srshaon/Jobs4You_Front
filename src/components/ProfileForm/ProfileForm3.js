import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import clearAction from "./clearAction";
const ProfileForm3 = (props) => {
    const { register, handleSubmit } = useForm();
    const { actions, state } = useStateMachine({ clearAction });
    const onSubmit = (data) => {
        const splitBio2 = state.data.bio.split(/\r?\n/g);
        const newData2 = { ...state.data, bio: splitBio2 };
        console.log(newData2);
        console.log(data);
        console.log(state.data);
        console.log(data);
        console.log(state);
        console.log(actions);
        actions.clearAction(data);
        props.history.push("./result");
        console.log(data);
        console.log(state.data);
        console.log(data);
        console.log(state);
        console.log(actions);
        // actions();
    };
    return (
        <div className='profile-form-div' >
            <div class="profile-form-container">
                <form style={{ height: '300px', marginTop: '80px' }} onSubmit={handleSubmit(onSubmit)}>
                    <h4>Congratulations! </h4>
                    <h4>You have updated all the info.</h4>
                    <h4>Now please submit to save your info.</h4>

                    <div className='profile-form-button-div d-flex justify-content-center' >
                        <button className='profile-form-button' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default ProfileForm3;