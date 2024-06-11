import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Enero", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Febrero", uv: 3000, pv: 1398, amt: 2210 },
  // ... otros datos ...
];

const ChartComponent = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default ChartComponent;
