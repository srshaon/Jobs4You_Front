import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { PieChart, Pie, Tooltip, ResponsiveContainer, LabelList, Label, Cell } from 'recharts';

const Chart = ({ _id }) => {
    const [postedSkills, setPostedSkills] = useState([]);
    const [gainedSkills, setGainedSkills] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const { email } = useAuth().user;

    useEffect(() => {
        fetch(`https://afternoon-headland-45054.herokuapp.com/posted-skills/${_id}`)
        .then(res => res.json())
        .then(data => setPostedSkills(data));
    }, []);

    useEffect(() => {
        fetch(`https://afternoon-headland-45054.herokuapp.com/skills/${email}`)
        .then(res => res.json())
        .then(data => setGainedSkills(data));
    }, []);

    useState(() => {
        if (postedSkills && gainedSkills) {
            postedSkills.forEach(postedSkill => {
                let index = gainedSkills.findIndex(gainedSkill => gainedSkill.includes(postedSkill));
                if (index !== -1) {
                    let tmp = [...data1, { name: postedSkill, value: 1 }];
                    setData1(tmp);
                }
                else if (index === -1) {
                    let tmp = [...data2, { name: postedSkill, value: 1 }];
                    setData2(tmp);
                }
            });
        }
    });

    const colors = [ 'rgb(130, 202, 157)', '#ec7272' ];
    return (
        <div style={{width: '100%', height: '80vh', color: 'black'}}>
            {
                (gainedSkills?.length !== 0) &&
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={data1}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={100}
                        fill="#8884d8"
                    >
                        <LabelList position="center" fontWeight="800" fontSize="1.2em" fill="black">71.98%</LabelList>
                    {/* <LabelList dataKey="name" position="outside" offset={40} stroke="black" fontSize="smaller" />s */}
                    </Pie>
                    <Pie data={data2} dataKey="value" cx="50%" cy="50%" innerRadius={110} outerRadius={135} fill="#82ca9d" label>
                        {data1.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

export default Chart;