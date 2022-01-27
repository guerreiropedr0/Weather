import './style.css';

const FORM = document.querySelector('form');
const INPUT_TEXT = document.getElementById('country');
const DETAILS = document.getElementById('weather-details');

const populate = (weather) => {
  DETAILS.innerHTML = `<div><h1>${weather.current.temp_c}</h1><h2>${weather.location.country}</h2><h3>${weather.location.localtime}</h3><img src="${weather.current.condition.icon}" alt="${weather.current.condition.text}"><h4>${weather.current.condition.text}</h4></div>`;
};

const requestWeather = async (key, country) => {
  const REQUEST = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=${country}&aqi=no`,
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
