import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = 'cd0aab3ba61e4af27742fa6aa6fd4cdd';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Country: 
          <input type="text" value={country} onChange={handleCountryChange} />
        </label>
        <label>
          City: 
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit"> Get Weather </button>
      </form>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
