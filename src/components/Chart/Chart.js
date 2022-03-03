import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, LabelList, Label, Cell } from 'recharts';

const Chart = () => {
    const data = [
        { name: 'HTML5', value: 400 },
        { name: 'CSS3', value: 300 },
        { name: 'JavaScript', value: 300 },
        { name: 'React', value: 200 },
        { name: 'Testing', value: 278 },
        { name: 'Deployment', value: 189 },
      ];
    const data2 = [
        { name: 'acquired', value: 1200 },
        { name: 'remaining', value: 467 }
    ];
    const colors = [ 'rgb(130, 202, 157)', '#ec7272' ];
    return (
        <div style={{width: '100%', height: '80vh', color: 'black'}}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data}
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
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;