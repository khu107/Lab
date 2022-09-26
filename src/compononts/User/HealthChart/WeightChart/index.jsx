import React from 'react';
import styles from './style.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts';

const data = [
  {
    uv: 4000,
    최근30일: 68.0,
  },
  {
    uv: 3000,
    최근30일: 67.59,
  },
  {
    uv: 2000,
    최근30일: 67.17,
  },
  {
    uv: 2780,
    최근30일: 66.76,
  },
  {
    uv: 1890,
    최근30일: 66.35,
  },
];
const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-10} fill="black" fontSize={15} textAnchor="first">
      {value}
    </text>
  );
};

export default function WeightChart() {
  return (
    <div className={styles.body}>
      <h4>체중</h4>

      <LineChart
        width={580}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <YAxis />

        <Legend />
        <Line type="monotone" dataKey="최근30일" stroke="#8884d8">
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>

      {/* <BarChart
        width={300}
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
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="blue" stackId="a" />
      </BarChart> */}
    </div>
  );
}
