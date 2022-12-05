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
    pv: 79,
    amt: 2400,
  },
  {
    name: '화',
    uv: 3000,
    pv: 75,
    amt: 2210,
  },
  {
    name: '수',
    uv: 2000,
    pv: 95,
    amt: 2290,
  },
  {
    name: '목',
    uv: 2780,
    pv: 78,
    amt: 2000,
  },
  {
    name: '금',
    uv: 1890,
    pv: 62,
    amt: 2181,
  },
  {
    name: '토',
    uv: 2390,
    pv: 90,
    amt: 2500,
  },
  {
    name: '일',
    uv: 3490,
    pv: 85,
    amt: 2100,
  },
];

export default function App() {
  return (
    <BarChart
      width={520}
      height={430}
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
      <YAxis type="number" domain={[40, 120]} />
      <Tooltip />

      <CartesianGrid strokeDasharray="3 3" />
      <Bar
        label={{ position: 'top' }}
        dataKey="pv"
        fill="#8884d8"
        background={{ fill: '#eee' }}
      />
    </BarChart>
  );
}
