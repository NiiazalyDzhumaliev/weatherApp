const city = document.getElementById('city-name');
const temperature = document.getElementById('weather-temp');
const form = document.querySelector('.city-form');

async function getWeather(chosenCity) {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&APPID=9180100ea185ef7a04ff39e412ae0e12`;
    const response = await fetch(url, {mode: 'cors'});
    const weatherData = await response.json();
    temperature.textContent = weatherData.main.temp;
  } catch (error) {
    temperature.textContent = 'Wrong city';
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
