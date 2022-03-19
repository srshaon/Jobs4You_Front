import './AllJobs.css';

import React, { useEffect, useState } from 'react';

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [allApplyList, setAllApplyList] = useState([]);
    const [allApplyCandi, setAllApplyCandi] = useState([]);
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
                const pqr = abc.filter(job => job.jobId == '62313177f9683fe5573677da')
                const result = ''
                setAllApplyList(pqr);
                pqr.map(x => {
                    fetch(`https://afternoon-headland-45054.herokuapp.com/usersDetails/${x.email}`)
                        .then(res => res.json())
                        .then(data => {
                            // xyz = [...data]
                            console.log('this is user', data)
                            setAllApplyCandi(data)
                        })
                })
            });
    }, []);
    return (

        <div className='abc'>
            Jobs Count:: {allJobs?.length}
            <h2> Apply Count:: {allApplyList?.length}</h2>
            {/* {
                allApplyCandi?.map(a => <h3>{a.displayName}</h3>)
            } */}
        </div>
    );
};

export default AllJobs;