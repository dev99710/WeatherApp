import React from 'react';
// import './Weather.css';

const Weather = ({ weatherData }) => {
  if (!weatherData || !weatherData.main) {
    return <p className="error-message">No weather data available. Please enter a valid city.</p>;
  }

  return (
    <div className="weather-container">
      <h2 className="weather-city">Weather in {weatherData.name}</h2>
      <p className="weather-info">Temperature: {weatherData.main.temp}°C</p>
      <p className="weather-info">Weather: {weatherData.weather[0].description}</p>
      <p className="weather-info">Humidity: {weatherData.main.humidity}%</p>
      <p className="weather-info">Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
