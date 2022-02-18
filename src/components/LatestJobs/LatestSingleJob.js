import React from 'react';
import { SiWorkplace } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { MdOutlineWork } from 'react-icons/md';
import { MdCastForEducation } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { Col } from 'react-bootstrap';

const LatestSingleJob = ({job}) => {
    console.log(job)
    return (
        <Col>
        <div className='ms-4 mt-5 '><div >
                        <div class="box box-down cyan">
                            <h5 className='jobcategory ms-2' style={{ color: "#7983f8", fontSize: 15 }}>{job?.job}
                            </h5>
                            <p className='ms-3'><img style={{ width: 50, height: 50, borderRadius: "50%" }} src={job?.image} alt="" />
                                <span className='company ms-2'>{job?.company}</span>
                            </p>

                            <p className='ms-3'>

                                <ImLocation2 />
                                {job?.jobLocation}
                            </p>
                            <p className='ms-3'>

                                <MdCastForEducation />
                                <span className='company ms-2'></span>{job?.educationalRequirements}
                            </p>
                            <p className='ms-3'>

                                <MdOutlineWork />
                                <span className='company ms-2'></span>{job?.experienceRequirements}
                            </p>
                            <p className='ms-3'>

                                <SiWorkplace />
                                <span className='company ms-2'></span>{job?.employmentStatus}
                            </p>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                                </div>
                                <div className='me-3'>
                                    <Link to={`/jobdetails/${job?._id}`}>

                                        <span style={{ fontSize: 40 }}>Details</span>
                                    </Link>
                                </div>
                            </div>
                        </div>




                    </div>

                    </div>
                    </Col>
    );
};

export default LatestSingleJob;