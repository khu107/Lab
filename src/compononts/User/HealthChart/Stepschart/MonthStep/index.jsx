import React from 'react';
import styles from './style.module.css';
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
    name: '5월',
    평군: 13150,
  },
  {
    name: '6월',
    평군: 10008,
  },
  {
    name: '7월',
    평군: 12500,
  },
  {
    name: '8월',
    평군: 10508,
  },
  {
    name: '9월',
    평군: 12000,
  },
  {
    name: '10월',
    평군: 11000,
  },
  {
    name: '11월',
    평군: 13500,
  },
];

export default function Stepschart() {
  return (
    <div className={styles.body}>
      <BarChart
        width={580}
        height={500}
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
        <YAxis type="number" domain={[1500, 15000]} />
        <Legend />
        <CartesianGrid strokeDasharray="3" />
        <Tooltip dataKey="기본걸음" />
        <Bar
          dataKey="평군"
          label={{ position: 'top' }}
          fill="#0088FE"
          stackId="a"
        />
      </BarChart>
    </div>
  );
}
