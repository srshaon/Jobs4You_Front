import React from "react";
import { useForm } from "react-hook-form";
import { Link, withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import clearAction from "./clearAction";

const Result = props => {
    const { register, handleSubmit } = useForm();
    const { actions, state } = useStateMachine({ clearAction });
    const onSubmit = (data) => {
        // const splitBio2 = state.data.bio.split(/\r?\n/g);
        // const newData2 = { ...state.data, bio: splitBio2 };
        // console.log(newData2);
        console.log(data);
        console.log(state.data);
        console.log(data);
        console.log(state);
        console.log(actions);
        actions.clearAction(data);
        props.history.push("./home");
        console.log(data);
        console.log(state.data);
        console.log(data);
        console.log(state);
        console.log(actions);
        // actions();
    };
    return (
        <>
            {/* <h2>Result:</h2> */}
            {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
            <div className='profile-form-div' >
                <div class="profile-form-container">
                    <form style={{ height: '300px', marginTop: '80px' }} onSubmit={handleSubmit(onSubmit)}>
                        <h4>Hurray! <i class="fa-solid fa-hand-peace"></i></h4>

                        <h4>Your profile has been updated successfully <i class="fa-solid fa-face-grin-wide"></i></h4>

                        <div className='profile-form-button-div d-flex justify-content-center' >
                            <button className='profile-form-button' type="submit">Back to Dashboard</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Result;
