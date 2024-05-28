import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';
import 'chart.js/auto';
import { AppBar, Toolbar, Typography, Container, Grid, Paper } from '@mui/material';

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

  const chartData = (label, key, color) => ({
    labels: data.map(d => new Date(d.timestamp)),
    datasets: [
      {
        label: label,
        data: data.map(d => d[key]),
        fill: false,
        borderColor: color,
      },
    ],
  });

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Air Quality Monitoring</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper>
              <Typography variant="h6" align="center">PM2.5 Levels</Typography>
              <Line data={chartData('PM2.5', 'pm25', 'red')} options={options} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Typography variant="h6" align="center">PM10 Levels</Typography>
              <Line data={chartData('PM10', 'pm10', 'blue')} options={options} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Typography variant="h6" align="center">Temperature (°C)</Typography>
              <Line data={chartData('Temperature (°C)', 'temperature', 'orange')} options={options} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Typography variant="h6" align="center">Humidity (%)</Typography>
              <Line data={chartData('Humidity (%)', 'humidity', 'green')} options={options} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Typography variant="h6" align="center">CO2 Levels (ppm)</Typography>
              <Line data={chartData('CO2 (ppm)', 'co2', 'purple')} options={options} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
