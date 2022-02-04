import './style.css';
import { currentWeather, populateCurrentWeather } from './modules/weather.js';

const FORM = document.querySelector('.search');
const INPUT_TEXT = document.querySelector('.search-bar');
FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  currentWeather(INPUT_TEXT.value);
  FORM.reset();
  FORM.focus();
});
