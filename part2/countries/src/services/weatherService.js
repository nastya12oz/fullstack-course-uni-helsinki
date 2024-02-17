import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = (capital) => {
  const url = `${BASE_URL}?q=${capital}&appid=${API_KEY}&units=metric`;
  return axios.get(url);
};

export default { getWeather };
