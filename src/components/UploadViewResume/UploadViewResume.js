import './UploadViewResume.css';

import { Button } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const UploadViewResume = () => {
    const [resumepdfFile, setResumePdfFile] = useState(null);
    const [resumeView, setResumeView] = useState([]);
    useEffect(() => {

        fetch("https://afternoon-headland-45054.herokuapp.com/resume")
            .then(res => res.json())
            .then(data => setResumeView(data))

    }, [])




    const { user } = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!resumepdfFile) {
            return;
        }
        const formData = new FormData();

        formData.append("email", user.email);

        formData.append("resumepdfFile", resumepdfFile);


        fetch("https://afternoon-headland-45054.herokuapp.com/resume", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("successfully uplodated");
                }
            });
    };
    return (
        <div>
            <div className="d-flex justify-content-center mb-5 pt-3 ">
                <form onSubmit={handleSubmit} action="" method="POST">

                    <input style={{ visibility: "hidden" }}
                        className="sadiaInput"
                        value={user.email}
                        aria-describedby="helpId6"

                    />

                    <input
                        className="sadiaInput"
                        onChange={(e) => setResumePdfFile(e.target.files[0])}
                        type="file"
                        required
                    />

                    <div className="d-flex justify-content-center">
                        <Button className="apply-btn text-white" type="submit">
                            Upload
                        </Button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center">
                {
                    resumeView.map(resume =>
                        <div className="mb-5">

                            <embed className='mb-5 ps-4' style={{ width: "1000px", height: "500px" }} src={`data:application/pdf;base64,${resume.resume}`} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UploadViewResume;