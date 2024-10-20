import { useState } from 'react';
import { getWeatherByCity } from '../services/weatherService';
import './HomePage.css';

const HomePage = ({ onChangeBackground }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
      setError('');
      onChangeBackground(data.weather[0].description);
      setCity(''); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Weather Search</h1>
        <div>
          <a href='https://www.linkedin.com/in/saichandanyadav/' target='_blank' rel="noopener noreferrer" className='developer'>Follow Me</a>
        </div>
        <input
          type="text"
          className="input"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit" className="button">Get Weather</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {weatherData && (
          <div className="weather-info">
            <h2 className="city-name">{weatherData.name}</h2>
            <p className="temperature">Temperature: {weatherData.main.temp} °C</p>
            <p className="humidity">Humidity: {weatherData.main.humidity} %</p>
            <p className="wind-speed">Wind Speed: {weatherData.wind.speed} m/s</p>
            <p className="condition">Condition: {weatherData.weather[0].description}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default HomePage;
