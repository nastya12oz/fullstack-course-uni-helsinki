import React from "react";
import weatherService from './services/weatherService';
import { useState, useEffect } from 'react';

function CountryInfo({ country }) {
  const [weather, setWeather] = useState(null);
  const [weatherIconUrl, setWeatherIconUrl] = useState('');

  useEffect(() => {
    if (country.capital[0]) {
      weatherService.getWeather(country.capital[0])
        .then(response => {
          setWeather(response.data);
          const iconCode = response.data.weather[0].icon;
          setWeatherIconUrl(`http://openweathermap.org/img/wn/${iconCode}.png`);
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
        });
    }
  }, [country.capital]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li> 
        ))}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      
      {weather && (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <img src={weatherIconUrl} alt="Weather icon" />
          <p>temperature: {weather.main.temp}°C</p>
          <p>wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
