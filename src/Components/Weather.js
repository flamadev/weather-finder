import React, { useEffect, useState } from 'react';
import icons from '../icons/icons.js';

const apiKEY = process.env.REACT_APP_WEATHERSTACK_API_KEY;
const apiURL = 'https://api.weatherapi.com/v1';

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${apiURL}/current.json?key=${apiKEY}&q=${country}&aqi=no`, {
      referrerPolicy: 'no-referrer',
      redirect: 'manual',
    })
      .then((response) => response.json())
      .then((weather) => {
        if (!weather.success) setError(weather.error);
        setWeather(weather);
      })
      .catch((error) => {
        setError(error);
      });
  }, [country]);
  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather in {country}</h2>
      {error ? (
        <p>No se pudo recuperar la información</p>
      ) : Object.keys(weather).length ? (
        <>
          <p className="weather-info__temperature">
            {weather.current.temp_c} ºC
          </p>
          <div className="weather-info">
            <p className="weather-info__humidity">
              <span className="material-symbols-outlined">humidity_mid</span>
              {weather.current.humidity} %
            </p>
            <p className="weather-info__air">
              <span className="material-symbols-outlined">air</span>
              {weather.current.wind_mph} mph {weather.current.wind_dir}
            </p>
            <p className="weather-info__watch">
              <span class="material-symbols-outlined">schedule</span>
              {weather.location.localtime}
            </p>
          </div>
          <div className="weather-icon">
            <img
              src={icons[weather.current.condition.text]}
              alt={weather.current.condition.text}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Weather;
