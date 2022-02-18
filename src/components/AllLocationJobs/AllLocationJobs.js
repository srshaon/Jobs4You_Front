import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { ImLocation2 } from "react-icons/im";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { SiWorkplace } from "react-icons/si";

const AllLocationJobs = () => {
    const { locationName } = useParams();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("https://still-cliffs-68775.herokuapp.com/jobs")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                const filterlocation = data.filter(location => location.jobLocation === locationName);
                setJobs(filterlocation)
            });
    }, []);
    return (
        <div className='mt-5 job'>
            <div className='d-flex justify-content-center row row-cols-lg-3 row-cols-md-3 row-cols-1'>
                {
                    jobs.map(job => <div className='ms-4 mt-5'>


                        <div class="row1-container">
                            <div class="box box-down cyan">
                                <p className='jobcategory ms-2' style={{ color: "#7983f8", fontSize: 15 }}>{job.job}
                                </p>
                                <p className='ms-3'><img style={{ width: 50, height: 50, borderRadius: "50%" }} src={job.image} alt="" />
                                    <span className='company ms-2'>{job.company}</span>
                                </p>

                                <p className='ms-3'>

                                    <ImLocation2 />
                                    {job.jobLocation}
                                </p>
                                <p className='ms-3'>

                                    <MdCastForEducation />
                                    <span className='company ms-2'></span>{job.educationalRequirements}
                                </p>
                                <p className='ms-3'>

                                    <SiWorkplace />
                                    <span className='company ms-2'></span>{job.experienceRequirements}
                                </p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                                    </div>
                                    <div className='me-3'>
                                        <Link to={`/jobdetails/${job._id}`}>

                                            <span style={{ fontSize: 40 }}>Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default AllLocationJobs;