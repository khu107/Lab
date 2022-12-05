import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: '월',
    uv: 4000,
    운동: 7000,
    amt: 2400,
  },
  {
    name: '화',
    uv: 3000,
    운동: 1,
    amt: 2210,
  },
  {
    name: '수',
    uv: 2000,
    운동: 6000,
    amt: 2290,
  },
  {
    name: '목',
    uv: 2780,
    운동: 1,
    amt: 2000,
  },
  {
    name: '금',
    uv: 1890,
    운동: 7000,
    amt: 2181,
  },
  {
    name: '토',
    uv: 2390,
    운동: 0,
    amt: 2500,
  },
  {
    name: '일',
    uv: 3490,
    운동: 6800,
    amt: 2100,
  },
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={440}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />

      <Tooltip />

      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="운동" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  );
}
