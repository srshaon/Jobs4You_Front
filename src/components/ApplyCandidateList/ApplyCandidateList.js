import './ApplyCandidateList.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const ApplyCandidateList = () => {
    const { jobId } = useParams();
    const [allJobs, setAllJobs] = useState([]);
    const [allApplyList, setAllApplyList] = useState([]);
    const [allApplyCandi, setAllApplyCandi] = useState([]);
    const [appliedCandidates, setAppliedCandidates] = useState([]);


    let x = 'sportsfi2017@gmail.com';
    useEffect(() => {
        fetch(`http://localhost:5000/usersDetails/${x}`)
            .then(res => res.json())
            .then(data => {
                // xyz = [...data]
                console.log('this is user', data)
                // setAllApplyCandi(data)
            })
    }, [x])
    let xyz = [];
    useEffect(() => {
        fetch("https://afternoon-headland-45054.herokuapp.com/jobs")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllJobs(data);
            });
    }, []);
    useEffect(() => {
        fetch("https://afternoon-headland-45054.herokuapp.com/applyList")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const abc = data;
                const pqr = abc.filter(job => job.jobId == jobId)
                let result = [];
                setAllApplyList(pqr);
                pqr.map(x => {
                    fetch(`http://localhost:5000/usersDetails/${x.email}`)
                        .then(res => res.json())
                        .then(data => {
                            // xyz = [...data]
                            result.push(data);
                            console.log('this is user data with multi fetch', data)
                            // setAllApplyCandi(data)
                        })
                        .finally(() => {
                            console.log(result);
                            setAllApplyCandi(result)
                        })
                })

            });
    }, [jobId, x.email]);
    console.log(allApplyCandi);
    return (

        <div className='abc'>
            {/* Jobs Count:: {allJobs?.length} */}
            <h2> Apply Count:: {allApplyList?.length}</h2>
            {
                allApplyList?.map(a =>
                    <div>
                        <h3>{a.dob}</h3>

                    </div>
                )
            }
        </div>
    );


};

export default ApplyCandidateList;