import toCelsius from './converter';
import toggleTemp from './toggle';

async function getWeather(chosenCity) {
  const temperature = document.getElementById('weather-temp');
  const wind = document.getElementById('weather-wind');
  const sky = document.getElementById('weather-sky');
  try {
    const api = '9180100ea185ef7a04ff39e412ae0e12';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&APPID=${api}`;
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    const inCels = toCelsius(weatherData.main.temp);
    temperature.textContent = `Temperature: ${inCels}\xB0C`;
    toggleTemp(temperature, inCels);
    sky.textContent = `Sky: ${weatherData.weather[0].main}`;
    wind.textContent = `Wind: ${weatherData.wind.speed}m/s`;
  } catch (error) {
    temperature.textContent = `${chosenCity} is wrong`;
    sky.textContent = '';
    wind.textContent = '';
  }
}

export default getWeather;
