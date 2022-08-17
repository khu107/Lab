import React from "react";
import styles from "./style.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "1일",
    value: 60,
  },
  {
    name: "2일",
    value: 63,
  },
  {
    name: "3일",
    value: 65,
  },
  {
    name: "4일",
    value: 67,
  },
  {
    name: "5일",
    value: 0,
  },
  {
    name: "6일",
    value: 66,
  },
  {
    name: "7일",
    value: 65,
  },
];

export default function WeightChart() {
  return (
    <div className={styles.body}>
      <h4>체중</h4>
      <BarChart
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
      </BarChart>
    </div>
  );
}
