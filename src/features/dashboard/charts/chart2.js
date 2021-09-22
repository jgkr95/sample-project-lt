import React from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data2 = [
  { name: "CC", submitted: 4000, processed: 2400 },
  { name: "BL", submitted: 2000, processed: 4800 },
  { name: "PL", submitted: 3000, processed: 1398 },
  { name: "IN", submitted: 1780, processed: 3908 },
  { name: "HL", submitted: 2780, processed: 5908 },
  { name: "AL", submitted: 4880, processed: 3908 },
  { name: "GL", submitted: 6780, processed: 1908 },
  { name: "EL", submitted: 6000, processed: 2908 },

];

function Chart2() {
  return (
    <ResponsiveContainer>
      <BarChart
        
        data={data2}
        margin={{ top: 30, bottom: 30, left: 15, right: 15 }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar barSize={15} dataKey="processed" fill="#feb2b2" />
        <Bar barSize={15} dataKey="submitted" fill="#33c9dc" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart2;
