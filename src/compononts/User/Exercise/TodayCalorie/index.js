import React from 'react';

import Chart from 'react-google-charts';

export default function App() {
  return (
    <Chart
      width={520}
      height={430}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['아침', 15],
        ['점심', 20],
        ['저녁', 40],
        ['간식', 18],
      ]}
      options={{
        title: '오늘 칼로리 1700 kcal',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}
