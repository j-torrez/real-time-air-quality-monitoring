import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
import 'chart.js/auto';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5001/api/data');
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.map(d => new Date(d.timestamp)),
    datasets: [
      {
        label: 'PM2.5',
        data: data.map(d => d.pm25),
        fill: false,
        borderColor: 'red',
      },
      {
        label: 'PM10',
        data: data.map(d => d.pm10),
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          tooltipFormat: 'PP hh:mm a',
          displayFormats: {
            minute: 'hh:mm a',
          },
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
    },
  };

  return (
    <div>
      <h1>Air Quality Data</h1>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default App;


