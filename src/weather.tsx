import React, { useEffect, useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setcity] = useState("");

  const API_KEY = "38b1fb8e326f9703416f317dfddb3cf0";

  function getdata() {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }

  return (
    <div style={{ textAlign: "center", padding: "30px", color: "black" }}>
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder="Enter the city name"
        onChange={(e) => {
          setcity(e.target.value);
        }}
        style={{ padding: "5px", background: "black", borderRadius: "2px" }}
      />
      <button onClick={getdata} style={{ margin: "5px" }}>
        GetData
      </button>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>🌡️ Temp: {weather.main.temp}°C</p>
          <p>🌥️ Weather: {weather.weather[0].main}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬️ Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;
