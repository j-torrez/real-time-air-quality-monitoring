# Real-Time Air Quality Monitoring and Visualization

This project aims to provide a comprehensive solution for real-time air quality monitoring and visualization using advanced computer science techniques. The system collects air quality data from simulated sensors, processes the data, and provides intuitive visualizations to inform users about the air quality in their environment.

## Features

- **Simulated Real-Time Data**: Generates realistic air quality data with daily and seasonal variations.
- **Data Visualization**: Displays multiple charts for different air quality parameters (PM2.5, PM10, Temperature, Humidity, CO2).
- **Responsive Design**: User-friendly interface that adapts to different screen sizes.
- **Random Events Simulation**: Introduces random spikes in pollution to simulate real-world events.

## Technologies Used

- **Backend**: Flask, Flask-CORS
- **Frontend**: React, Chart.js, Material-UI
- **Languages**: Python, JavaScript

## Project Structure
real-time-air-quality-monitoring/
│
├── backend/
│ ├── app.py
│ └── venv/
│ └── ...
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ ├── package.json
│ └── package-lock.json
│
└── README.md


## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd real-time-air-quality-monitoring/backend

2. **Create a virtual environment and activate it:**
	```bash
	python -m venv venv
	source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install the required Python packages:**
	```bash
	pip install flask flask-cors


