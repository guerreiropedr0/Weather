export const populateCurrentWeather = (data) => {
  document.body.innerHTML = `    <section class="weather">
  <div class="weather-details">
    <div class="current-weather">
      <h1>${data.current.temp_c}°</h1>
      <div class="current-location">
        <h2>${data.location.name}, ${data.location.country}</h2>
        <h3>${data.location.localtime}</h3>
      </div>
      <div class="current-condition">
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text} icon" />
        <h3>${data.current.condition.text}</h3>
      </div>
    </div>
  </div>
  <div class="weather-information">
    <form class="search">
      <input id="bar" class="search-bar" type="text" placeholder="Search again" required />
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
    <h3>Other Countries</h3>
    <ul class="other-places">
      <li><a href="#" class="portugal">Portugal</a></li>
      <li><a href="#" class="usa">USA</a></li>
      <li><a href="#" class="germany">Germany</a></li>
      <li><a href="#" class="mexico">Mexico</a></li>
    </ul>
    <hr />
    <h3>Weather Details</h3>
    <div class="detail-item">
      <p>Cloudy</p>
      <p>${data.current.cloud}%</p>
    </div>
    <div class="detail-item">
      <p>Humidity</p>
      <p>${data.current.humidity}%</p>
    </div>
    <div class="detail-item">
      <p>Wind</p>
      <p>${data.current.wind_kph}km/h</p>
    </div>
    <div class="detail-item">
      <p>Rain</p>
      <p>${data.current.precip_mm}mm</p>
    </div>
    <hr />
    <div class="next-days">
    <h3>Next Days</h3>
    </div>
  </div>
</section>`;
  for (let i = 1; i < 3; i += 1) {
    document.querySelector('.next-days').innerHTML += `<hr><h4>${data.forecast.forecastday[i].date}</h4>
    <div class="detail-item">
    <p>Max temperature</p>
    <p>${data.forecast.forecastday[i].day.maxtemp_c}°</p>
  </div>
  <div class="detail-item">
    <p>Minimum temperature</p>
    <p>${data.forecast.forecastday[i].day.mintemp_c}°</p>
  </div>
  <div class="detail-item">
    <p>Average temperature</p>
    <p>${data.forecast.forecastday[i].day.avgtemp_c}°</p>
  </div>
  <div class="detail-item">
    <p>Wind</p>
    <p>${data.forecast.forecastday[i].day.maxwind_kph}km/h</p>
  </div>
  <div class="detail-item">
    <p>Rain</p>
    <p>${data.forecast.forecastday[i].day.totalprecip_mm}mm</p>
  </div>
  <div class="detail-item">
    <p>Humidity</p>
    <p>${data.forecast.forecastday[i].day.avghumidity}%</p>
  </div>
  <div class="detail-item">
  <p>Condition</p>
  <p>${data.forecast.forecastday[i].day.condition.text}</p>
</div>`;
  }

  if (data.current.condition.text === 'Partly cloudy') {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.pexels.com/photos/449751/pexels-photo-449751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")';
  } else if (data.current.condition.text === 'Clear') {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.pexels.com/photos/754419/pexels-photo-754419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  } else if (
    data.current.condition.text === 'Light rain'
    || data.current.condition.text === 'Light drizzle'
    || data.current.condition.text === 'Patchy rain possible'
  ) {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.pexels.com/photos/950223/pexels-photo-950223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  } else if (data.current.condition.text === 'Mist') {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.unsplash.com/photo-1527954513726-611b208be16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")';
  } else if (data.current.condition.text === 'Heavy snow') {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.pexels.com/photos/5864098/pexels-photo-5864098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  } else if (data.current.condition.text === 'Sunny') {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")';
  } else if (data.current.condition.text === 'Overcast') {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  } else if (data.current.condition.text === 'Light snow') {
    document.querySelector('.weather-details').style.backgroundImage = 'url("https://images.pexels.com/photos/974063/pexels-photo-974063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")';
  }
  const FORM = document.querySelector('.search');
  const INPUT_TEXT = document.querySelector('.search-bar');
  FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-use-before-define
    currentWeather(INPUT_TEXT.value);
    FORM.reset();
    FORM.focus();
  });
};

export const currentWeather = async (place) => {
  const request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=891d8ee1554d48498a1210748220202&q=${place}&days=10&aqi=no&alerts=no`);
  const data = await request.json();
  populateCurrentWeather(data);
};
