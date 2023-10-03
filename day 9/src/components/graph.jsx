import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChartComponent = () => {
  // Sample data for the pie chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
        ],
      },
    ],
  };

  // Optional chart options
  const options = {
    responsive: true,
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartComponent;
