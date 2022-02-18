import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './JobDetails.css';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Spinner } from 'react-bootstrap';

const JobDetails = () => {
    const { jobId } = useParams();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`https://still-cliffs-68775.herokuapp.com/jobs/${jobId}`)
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, [jobId]);
    console.log(jobs?.additionalRequirements)
    if (jobs.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (

        <div className='detailbody'>
            {

                <div className='ms-2 me-5 row row-cols-lg-2 row-cols-md-2 row-cols-1'>
                    <div className='mt-4' style={{ borderRight: "2px solid gray" }}>
                        <h1 style={{ color: "#7983f8" }}>{jobs.job}</h1>
                        <h2>{jobs.company}</h2>
                        <p><b style={{ fontSize: 20 }}>Vacancy ➾</b> <span>{jobs.vacancy}</span>
                        </p>
                        <p><b style={{ fontSize: 20 }}>Job Responsibilites ➾</b> <span>{jobs.jobResponsibilities
                        }</span>
                        </p>
                        <p><b style={{ fontSize: 20 }}>Employment Status ➾</b> <span>{jobs.employmentStatus
                        }</span>
                        </p>
                        <p><b style={{ fontSize: 20 }}>Educational Requirements ➾</b> <span>{jobs.educationalRequirements

                        }</span>
                        </p>
                        <p><b style={{ fontSize: 20 }}>Experience Requirements ➾</b> <span>{jobs.experienceRequirements
                        }</span>
                        </p>
                        <p><b style={{ fontSize: 20 }}> Job Location ➾</b> <span>{jobs.jobLocation
                        }</span>
                        </p>
                        <p><b style={{ fontSize: 20 }}> Salary ➾</b> <span>৳ {jobs.salary
                        }</span>
                        </p>
                        <p><b style={{ fontSize: 20 }}>Additional Requirements ➾</b>
                            <ul>
                                {
                                    jobs?.additionalRequirements.map(item => <li>
                                        {item}
                                    </li>)
                                }
                            </ul>
                        </p>
                    </div>

                    <div >
                        <div style={{ color: "#7983f8" }}>
                            <h5 className='mt-4'>Category: {jobs.category}</h5>
                            <h5 >Location: {jobs.jobLocation}</h5>
                            <h5 >Employment Status: {jobs.employmentStatus}</h5>
                        </div>
                        <div id="container">
                            <div class="job-details">
                                <h1>Job Description
                                </h1>
                                <p class="information">Product managers lead cross functional projects to generate vision and create iterative plans for execution and helps other team to execute the proposed vision. End results of these visions are developing new technology product, features or developing a new process which drives growth or operational excellence.
                                </p>

                            </div>

                            <div class="job-image">

                                <h4>

                                    Job Summary
                                </h4>
                                <h1><IoIosArrowDropdownCircle /></h1>
                                <img style={{ height: 370, width: 300 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsdgy6Er7YJgjPfgpC3Toi_hMJPtednU_6g&usqp=CAU" alt="" />


                                <div class="info">
                                    <h2> Summary</h2>
                                    <ul>
                                        <li><strong>Published On : </strong>{jobs.publishedOn} </li>
                                        <li><strong>Vacancy : </strong>{jobs.vacancy}</li>
                                        <li><strong>Employment Status: </strong>{jobs.employmentStatus}</li>
                                        <li><strong>Experience: </strong>{jobs.experienceRequirements
                                        }</li>
                                        <li><strong>Job Location: </strong>{jobs.jobLocation}</li>
                                        <li><strong>Salary: ৳ </strong>{jobs.salary}</li>
                                        <li><strong>Application Deadline: </strong>{jobs.aplicationDeadline
                                        }</li>

                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            }

        </div>
    );
};

export default JobDetails;