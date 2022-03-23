import React, { useState, useEffect } from 'react';
import LatestSingleJob from './LatestSingleJob';
import { Row } from 'react-bootstrap';
const LatestJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        // let z = 0;
        fetch("https://afternoon-headland-45054.herokuapp.com/jobs")
            .then((res) => res.json())
            .then((data) => {

                let sortedList = [];
                // if (z < 2) {
                for (let i = (data.length - 1); i >= 0; i--) {

                    sortedList.push(data[i]);
                    // z = z + 1;
                }
                // }

                setJobs(sortedList);
            });
    }, []);
    return (
        <div className="mb-5 pb-3">
            {/* <h2 className='text-center text-primary'>Latest Jobs</h2> */}
            {/* <hr className='m-auto text-danger bolder w-25'></hr> */}
            <Row xs={1} md={1}>
                {jobs.slice(0, 4).map(job => <LatestSingleJob job={job} />)}
            </Row>

        </div>
    );
};

export default LatestJobs;