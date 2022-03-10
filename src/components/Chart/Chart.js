import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import useAuth from '../../hooks/useAuth';
import { Spinner, Button } from 'react-bootstrap';
import SinglePie from './SinglePie';
import './Chart.css';

const Chart = () => {
    const { _id } = useParams();
    const [postedSkills, setPostedSkills] = useState([]);
    const [gainedSkills, setGainedSkills] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const { email } = useAuth().user;

    useEffect(() => {
        if (_id && email)
        {
            fetch(`https://afternoon-headland-45054.herokuapp.com/${_id}`)
            .then(res => res.json())
            .then(data => setPostedSkills(data));
            

            fetch(`https://afternoon-headland-45054.herokuapp.com/${email}`)
            .then(res => res.json())
            .then(data => setGainedSkills(data));

            console.log('this is isssss', email);
        }

    }, [email]);

    useEffect(() => {
            if (postedSkills?.length > 0)
            {
                let temp = [];
                let tmp = [{name: 'acquired', value: 0}, {name: 'remaining', value: 0}];
                let counter1 = 0;
                let counter2 = 0;

                postedSkills?.forEach(postedSkill => {
    
                    temp.push({ name: postedSkill, value: 1 });
    
                    let index = gainedSkills?.findIndex(gainedSkill => gainedSkill?.toLowerCase()?.includes(postedSkill?.toLowerCase()));
                    if (index !== -1) {
                        counter1 = counter1 + 1;
                        tmp[0].value = counter1;
                        console.log(tmp);
                    }

                    else if (index === -1) {
                        counter2 = counter2 + 1;
                        tmp[1].value = counter2;
                        console.log(tmp);
                    }
                });
                setData1(temp);
                setData2(tmp);
            }
    }, [gainedSkills?.length]);
    console.log('Agaiiiiiiin', data1, data2);

    return (
        <div style={{width: '100%', height: '80vh', color: 'black'}}>
            {
                (gainedSkills?.length !== 0) &&
                <SinglePie data1={data1} data2={data2} />
                    
            }

            {
                (gainedSkills?.length !== 0) &&
                <Link to={`/apply/${_id}`}>
                    <Button className="apply-btn px-5">Apply for job</Button>
                </Link>
            }

            {
                ((gainedSkills?.length === 0) && email) &&
                <div className="text-center my-5 py-5 smoothy"><p>You don't have any skills. Go Back to <Link to="/dashboard">Dashboard</Link></p></div>
            }

            {
                ((gainedSkills?.length === 0) && !email) &&
                <div className="d-flex justify-content-center my-5"><Spinner animation="border" variant="dark" /></div>
            }

        </div>
    )
}

export default Chart;