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
    기본걸음: 5150,
  },
  {
    name: '화',
    기본걸음: 3008,
  },
  {
    name: '수',
    기본걸음: 6500,
  },
  {
    name: '목',
    기본걸음: 4508,
  },
  {
    name: '금',
    기본걸음: 7500,
  },
  {
    name: '토',
    기본걸음: 7000,
  },
  {
    name: '일',
    기본걸음: 300,
  },
];

export default function Stepschart() {
  const _data = data.map((data) =>
    data.기본걸음 >= 3000
      ? {
          ...data,
          기본걸음: 3000,
          오늘의걸음: data.기본걸음 - 3000,
        }
      : data
  );

  return (
    <div className={styles.body}>
      <BarChart
        width={450}
        height={500}
        data={_data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis type="number" domain={[1000, 10000]} />
        <Legend />
        <CartesianGrid strokeDasharray="3" />
        <Tooltip dataKey="기본걸음" />
        <Bar dataKey="기본걸음" fill="#0088FE" stackId="a" />
        <Bar
          label={{ position: 'top' }}
          dataKey="오늘의걸음"
          fill="#00C49F"
          stackId="a"
        />
      </BarChart>
    </div>
  );
}
