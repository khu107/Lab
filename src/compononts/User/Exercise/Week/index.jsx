import React, { PureComponent } from 'react';

import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';

const initialData = [
  { name: 1, 심박수: 63, impression: 150 },
  { name: 2, 심박수: 65, impression: 120 },
  { name: 3, 심박수: 67, impression: 150 },
  { name: 4, 심박수: 67, impression: 180 },
  { name: 5, 심박수: 70, impression: 200 },
  { name: 6, 심박수: 67, impression: 499 },
  { name: 7, 심박수: 72, impression: 50 },
  { name: 8, 심박수: 75, impression: 100 },
  { name: 9, 심박수: 69, impression: 100 },
  { name: 10, 심박수: 65, impression: 100 },
  { name: 11, 심박수: 73, impression: 210 },
  { name: 12, 심박수: 64, impression: 300 },
  { name: 13, 심박수: 75, impression: 50 },
  { name: 14, 심박수: 72, impression: 100 },
  { name: 15, 심박수: 64, impression: 300 },
  { name: 16, 심박수: 79, impression: 400 },
  { name: 17, 심박수: 73, impression: 200 },
  { name: 18, 심박수: 70, impression: 50 },
  { name: 19, 심박수: 65, impression: 100 },
  { name: 21, 심박수: 74, impression: 100 },
  { name: 22, 심박수: 63, impression: 100 },
  { name: 23, 심박수: 73, impression: 100 },
  { name: 24, 심박수: 67, impression: 100 },
  { name: 25, 심박수: 76, impression: 100 },
  { name: 26, 심박수: 71, impression: 100 },
  { name: 27, 심박수: 61, impression: 100 },
  { name: 28, 심박수: 65, impression: 100 },
  { name: 29, 심박수: 65, impression: 100 },
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = initialData.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data: initialData,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
  animation: true,
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/highlight-zomm-line-chart-v77bt';

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    const { data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft,
      refAreaRight,
      'impression',
      30
    );

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2,
    }));
  }

  render() {
    const {
      data,
      barIndex,
      left,
      right,
      refAreaLeft,
      refAreaRight,
      top,
      bottom,
      top2,
      bottom2,
    } = this.state;

    return (
      <div
        className="highlight-bar-charts"
        style={{ userSelect: 'none', width: '100%' }}
      >
        <ResponsiveContainer height={400}>
          <LineChart
            width={500}
            height={400}
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={(e) =>
              this.state.refAreaLeft &&
              this.setState({ refAreaRight: e.activeLabel })
            }
            onMouseUp={this.zoom.bind(this)}
          >
            <CartesianGrid strokeDasharray="1 1" />

            <YAxis
              allowDataOverflow
              type="number"
              yAxisId="1"
              domain={[40, 120]}
            />

            <Tooltip />
            <Line
              yAxisId="1"
              type="natural"
              dataKey="심박수"
              stroke="blue"
              animationDuration={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
