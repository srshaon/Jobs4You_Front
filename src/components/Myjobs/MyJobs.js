import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { PieChart, Pie, Tooltip, ResponsiveContainer, LabelList, Label, Cell } from 'recharts';

const MyJobs = ({ data1, data2 }) => {
    const [applyList, setApplyList] = useState([]);
    
    const { user} = useAuth();

    useEffect(() => {

        fetch("https://afternoon-headland-45054.herokuapp.com/applyList")
            .then(res => res.json())
            .then(data => setApplyList(data))

    }, [])
   
    console.log(applyList)
    const applyCollection = applyList.filter(applies => (applies.email == user.email))
    console.log(applyCollection)
    return (
        <div className="ms-5">
             
            <div className="row row-cols-md-3 row-cols-lg-3 mb-5">

                {
                    applyCollection.map(apply => <div>
                         
                        <h2>
                            {apply.job}
                        </h2>
                        <img className=' d-flex justify-content-center ' style={{ width: 200 }} src={apply.image} alt="" />
                        <h4 >
                            {apply.company}
                        </h4>

                        <h4 >
                            {apply.employmentStatus}
                        </h4>
                        <h5 >
                            {apply.jobLocation}
                        </h5>
                        <h5 >
                            {apply.percentage}
                        </h5>
                    </div>
                    )





                }

            </div>
        </div>
    );
}


export default MyJobs;