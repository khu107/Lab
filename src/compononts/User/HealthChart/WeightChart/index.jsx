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
    최근30일: 68.0,
  },
  {
    최근30일: 67.59,
  },
  {
    최근30일: 67.17,
  },
  {
    최근30일: 66.76,
  },
  {
    최근30일: 66.35,
  },
];
const CustomizedLabel = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-15} fill="black" fontSize={15} textAnchor="first">
      {value}
    </text>
  );
};

export default function WeightChart() {
  return (
    <div className={styles.body}>
      <h4 style={{ color: '#0088FE' }}>체중</h4>

      <LineChart
        width={460}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <YAxis type="number" domain={[40, 100]} />
        <Legend />
        <Line type="monotone" dataKey="최근30일" stroke="#8884d8">
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>
    </div>
  );
}
