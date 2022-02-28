import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const ProfileForm2 = (props) => {
    const { register, handleSubmit } = useForm();
    const { actions, state } = useStateMachine({ updateAction });
    const onSubmit = (data) => {
        console.log(data);
        actions.updateAction(data);
        const splitBio = data.bio.split(/\r?\n/g);
        const newData = { ...data, bio: splitBio };

        console.log(newData);
        // console.log(newData2);
        console.log(data);

        props.history.push("./profileForm3");
        console.log(data);
        console.log(state.data);
        console.log(data);
        console.log(state);
        console.log(actions);
    };
    return (
        <div className='profile-form-div' >


            <div >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="profile-form-container">

                        <div class="profile-form-inputs">
                            <div className='profile-form-input-pair d-flex justify-content-center'>

                                <textarea rows={8} className='profile-form2-bio-textarea' placeholder="Your Bio" defaultValue="" {...register("bio", { required: true })} />
                            </div>
                            <br />
                            <div className='profile-form-input-pair d-flex justify-content-center'>

                                <textarea rows={5} className='profile-form2-hobby-textarea' placeholder="Extra Curricular Activities / Hobbies" defaultValue="" {...register("hobbies", { required: true })} />
                            </div>
                            <br />
                            <div className='profile-form-input-pair d-flex justify-content-center'>

                                <textarea rows={5} className='profile-form2-hobby-textarea' placeholder="Achievements / Awards" defaultValue="" {...register("achievements", { required: true })} />
                            </div>
                            <div className='profile-form-input-pair d-flex justify-content-center'>
                                <input className='profile-form-input' placeholder="Job Preference" defaultValue={''} {...register("preference", { required: true })} />
                                <input className='profile-form-input' placeholder="Available For" defaultValue={''} {...register("available", { required: true })} />
                            </div>
                            {/* <div className='profile-form-input-pair d-flex justify-content-center'>
                                <input className='profile-form-input' placeholder="First Name" defaultValue={''} {...register("fname", { required: true })} />
                                <input className='profile-form-input' placeholder="Last Name" defaultValue={''} {...register("lname", { required: true })} />
                            </div>

                            <div className='profile-form-input-pair d-flex justify-content-center'>
                                <input className='profile-form-input' placeholder="Date Of Birth" defaultValue={''} {...register("dob", { required: true })} />
                                <input className='profile-form-input' placeholder="Gender" defaultValue={''} {...register("gender", { required: true })} />
                            </div>
                            <div className='profile-form-input-pair d-flex justify-content-center'>
                                <input className='profile-form-input' placeholder="Nationality" defaultValue={''} {...register("nationality", { required: true })} />
                                <input className='profile-form-input' placeholder="NID Number" defaultValue={''} {...register("nid", { required: true })} />
                            </div>
                            <div className='profile-form-input-pair d-flex justify-content-center'>
                                <input className='profile-form-input' placeholder="Passport No." defaultValue={''} {...register("passport", { required: true })} />
                                <input className='profile-form-input' placeholder="Passport Issue Date" defaultValue={''} {...register("passportIssueDate", { required: true })} />
                            </div>

                            <div className='profile-form-input-pair d-flex justify-content-center'>
                                <input className='profile-form-input' placeholder="Primary Email" defaultValue={''} {...register("pEmail", { required: true })} />
                                <input className='profile-form-input' placeholder="Secondary Email" defaultValue={''} {...register("sEmail", { required: true })} />
                            </div>
                            <div className='profile-form-input-pair d-flex justify-content-center'>
                                <input className='profile-form-input' placeholder="Primary Contact" defaultValue={''} {...register("pContact", { required: true })} />
                                <input className='profile-form-input' placeholder="Emergency Contact" defaultValue={''} {...register("eContact", { required: true })} />
                            </div> */}

                            {/* <button onClick={getButton} id='first-next-button' className="first next">Next Step</button> */}
                            <div className='profile-form-button-div d-flex justify-content-center' >
                                <button className='profile-form-button' type="submit">Next</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm2;