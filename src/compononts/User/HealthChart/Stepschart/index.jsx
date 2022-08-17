import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "1",
    uv: 4000,
    거름: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 3000,
    거름: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 2000,
    거름: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 2780,
    거름: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 1890,
    거름: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 2390,
    거름: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 3490,
    거름: 4300,
    amt: 2100,
  },
];

export default function Stepschart() {
  return (
    <div>
      <span>거름</span>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="거름"
          fill="blue"
          stackId="a"
          background={{ fill: "white" }}
        />
      </BarChart>
    </div>
  );
}
