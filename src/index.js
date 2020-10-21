const city = document.getElementById('city-name');
const temperature = document.getElementById('weather-temp');
const form = document.querySelector('.city-form');


const toCelsius = inFahr => {
  const inCels = inFahr - 273.15;
  const roundDegree = Math.round(inCels);
  return roundDegree;
};

async function getWeather(chosenCity) {
  try {
    const api = '9180100ea185ef7a04ff39e412ae0e12';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&APPID=${api}`;
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    const currentTemp = toCelsius(weatherData.main.temp);
    temperature.textContent = `${currentTemp}\xB0C`;    
  } catch (error) {
    temperature.textContent = `${chosenCity} is wrong`;
  }
}

const formSubmit = () => {
  form.addEventListener('submit', event => {
    const chosenCity = city.value;
    getWeather(chosenCity);
    event.preventDefault();
    form.reset();
  });
};

formSubmit();
