import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    const API_KEY = 'e0a1a23e2e3a728e7457022aecfc69ca';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null); // Clear previous errors if successful
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Application</h1>
      <WeatherForm getWeather={getWeather} />
      {error && <p className="error-message">{error}</p>}
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;
