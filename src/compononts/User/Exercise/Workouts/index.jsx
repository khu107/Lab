import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from 'recharts';

const data = [
  {
    name: '걷기',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: '달리기',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: '헬스',
    uv: 30,
    pv: 30,
    amt: 989,
    cnt: 350,
  },
];

export default function App() {
  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={440}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" dataKey="amt" />
      <YAxis dataKey="name" type="category" />

      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
}
