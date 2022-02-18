import React,{useState,useEffect} from 'react';
import LatestSingleJob from './LatestSingleJob';
import { Row } from 'react-bootstrap';
const LatestJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("https://still-cliffs-68775.herokuapp.com/jobs")
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            });
    }, []);
    return (
        <div className='mt-5'>
            <h2 className='text-center text-primary'>Latest Jobs</h2>
            <hr className='m-auto text-danger bolder w-25'></hr>
            <Row xs={1} md={3} g-4 mt-3>
            {jobs.map(job=><LatestSingleJob job={job}/>)}
            </Row>
            
        </div>
    );
};

export default LatestJobs;