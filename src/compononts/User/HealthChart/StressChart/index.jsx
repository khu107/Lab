import React from 'react';
import styles from './style.module.css';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: '1',
    uv: 0.5,
  },
  {
    name: '2',
    uv: 0.6,
  },
  {
    name: '3',
    uv: 0.49,
  },
  {
    name: '4',
    uv: 0.7,
  },
  {
    name: '5',
    uv: 0.3,
  },
  {
    name: '6',
    uv: 0.7,
  },
  {
    name: '7',
    uv: 0.5,
  },
  {
    name: '8',
    uv: 0.9,
  },
  {
    name: '9',
    uv: 1,
  },
  {
    name: '10',
    uv: 0.7,
  },
  {
    name: '11',
    uv: 0.6,
  },
  {
    name: '12',
    uv: 0.4,
  },
  {
    name: '13',
    uv: 0.5,
  },
  {
    name: '14',
    uv: 0.4,
  },
  {
    name: '15',
    uv: 0.6,
  },
];

export default function StressChart() {
  return (
    <div className={styles.body}>
      <h4 style={{ color: '#0088FE' }}>스트레스</h4>
      <span className={styles.p1}>놈음</span>
      <span className={styles.p2}>낮음</span>
      <LineChart
        width={450}
        height={460}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />

        <Line dataKey="uv" />
      </LineChart>
    </div>
  );
}
