import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Label,
  Cell,
} from "recharts";

const SinglePie = ({ data1, data2 }) => {
  const colors = ["rgb(130, 202, 157)", "#ec7272"];
  return (
    <div className="text-center" style={{ height: "60vh" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data1}
            cx="60%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
          >
            <LabelList
              position="center"
              fontWeight="800"
              fontSize="1.2em"
              fill="black"
            >{`${(
              (data2[0]?.value / (data2[0]?.value + data2[1]?.value)) *
              100
            ).toFixed(2)}%`}</LabelList>
            {/* <LabelList dataKey="name" position="outside" offset={40} stroke="black" fontSize="smaller" />s */}
          </Pie>
          <Pie
            data={data2}
            dataKey="value"
            cx="60%"
            cy="50%"
            innerRadius={130}
            outerRadius={155}
            fill="#82ca9d"
            label
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SinglePie;
