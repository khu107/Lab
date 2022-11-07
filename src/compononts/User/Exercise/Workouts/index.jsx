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
  LabelList,
  Label,
} from 'recharts';

const data = [
  {
    name: '걷기',
    uv: 6000,
    pv: 6000,
    amt: 1400,
  },
  {
    name: '달리기',
    uv: 12000,
    pv: 12000,
    amt: 1506,
  },
  {
    name: '헬스',
    uv: 30,
    pv: 30,
    amt: 989,
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
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />

      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
}
