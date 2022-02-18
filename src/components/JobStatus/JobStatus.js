import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const JobStatus = () => {

    const [status, setStatus] = useState([]);
    useEffect(() => {
        fetch("https://still-cliffs-68775.herokuapp.com/jobs")
            .then((res) => res.json())
            .then((data) => {

                const statusList = data.map(status => (status.employmentStatus))
                const uniqueStatus = [...new Set(statusList)];
                setStatus(uniqueStatus)
            });
    }, []);

    return (
        <div className='mt-5 row row-cols-lg-3 row-cols-md-3 row-cols-1 cardbg ms-3 me-3'>
            {
                status.map(status => <div >
                    <div className='mt-5'>
                        <div class="box me-5">
                            <h3>{status}</h3>

                            <div className='d-flex justify-content-center'>

                                <Link to={`/jobstatus/${status}`}>

                                    View All Jobs
                                </Link>

                            </div>
                        </div>
                    </div>


                </div>)
            }
        </div>
    );
};

export default JobStatus;