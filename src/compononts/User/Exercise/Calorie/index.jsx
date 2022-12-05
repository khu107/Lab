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
    name: '월',
    칼로리: 1700,
  },
  {
    name: '화',
    칼로리: 1982,
  },
  {
    name: '수',
    칼로리: 2323,
  },
  {
    name: '목',
    칼로리: 1800,
  },
  {
    name: '금',
    칼로리: 1764,
  },
  {
    name: '토',
    칼로리: 1897,
  },
  {
    name: '일',
    칼로리: 1798,
  },
];

export default function Stepschart() {
  return (
    <div className={styles.body}>
      <BarChart
        width={500}
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

        <Tooltip dataKey="기본걸음" />
        <Bar
          dataKey="칼로리"
          label={{ position: 'top' }}
          fill="#8884d8"
          stackId="a"
        />
      </BarChart>
    </div>
  );
}
