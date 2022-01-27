import './style.css';

const FORM = document.querySelector('form');
const INPUT_TEXT = document.getElementById('country');
const DETAILS = document.getElementById('weather-details');

const populate = (weather) => {
  DETAILS.innerHTML = `<div><h1>${weather.current.temp_c}°C</h1><h2>${weather.location.country}</h2><h3>${weather.location.localtime}</h3><img src="${weather.current.condition.icon}" alt="${weather.current.condition.text}"><h4>${weather.current.condition.text}</h4></div><h5>Weather details</h5><div><p>Cloudy: ${weather.current.cloud}%</p><p>Humidity: ${weather.current.humidity}%</p><p>Wind: ${weather.current.wind_kph}km/h</p></div><div><h5>Next Days</h5></div>`;
  for (let i = 1; i < 3; i += 1) {
    DETAILS.innerHTML += `<ul><h6>${weather.forecast.forecastday[i].date}</h6><li>Minimum Temp: ${weather.forecast.forecastday[i].day.mintemp_c}°C</li><li>Avegage Temp: ${weather.forecast.forecastday[i].day.avgtemp_c}°C</li><li>Maximum Temp: ${weather.forecast.forecastday[i].day.maxtemp_c}°C</li></ul>`;
  }
};

const requestWeather = async (key, country) => {
  const REQUEST = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&days=10&aqi=no&alerts=no`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const DATA = await REQUEST.text();
  const PARSED_DATA = JSON.parse(DATA);
  populate(PARSED_DATA);
};

const submit = () => {
  requestWeather('94baa6421336473989494544222701', INPUT_TEXT.value);
};

FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  submit();
  FORM.reset();
  FORM.focus();
});
