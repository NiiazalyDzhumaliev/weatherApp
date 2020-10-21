const city = document.getElementById('city-name');
const degree = document.getElementById('degree');
const form = document.querySelector('.city-form');

async function getWeather(chosenCity) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&APPID=9180100ea185ef7a04ff39e412ae0e12`;
  const response = await fetch(url, {mode: 'cors'});
  const weatherData = await response.json();
}

const formSubmit = () => {
  form.addEventListener('submit', event => {
    const chosenCity = city.value;
    getWeather(chosenCity);
    event.preventDefault();
    form.reset();
    console.log(chosenCity);
  });
};

formSubmit();
