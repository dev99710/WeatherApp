import React, { useState } from 'react';
// import './WeatherForm.css';

const WeatherForm = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
        className="input-field"
      />
      <button type="submit" className="submit-button">Get Weather</button>
    </form>
  );
};

export default WeatherForm;