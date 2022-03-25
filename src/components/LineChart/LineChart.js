import "./LineChart.css";

import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Job Position Post", "Total Application", { role: "style" }],
  ["Nurse", 70, "color: pink"],
  [
    "Pharmacy Assistant",
    100,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: brown",
  ],

  ["Account Manager", 69, "color: green"],
  [
    "Research Officer",
    51,
    "stroke-color: #703593; stroke-width: 4; fill-color: purple",
  ],
  ["Pharmacist", 150, "color: #76A7FA"],
];

const LineChart = () => {
  return (
    <div style={{ background: "none" }}>
      <Chart
        width={600}
        height={320}
        data={data}
        chartType="ColumnChart"
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
};

export default LineChart;
