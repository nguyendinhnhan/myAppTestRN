const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=0f16fc5bd1ba415f0894e3da64ebf855&q=';

const getWeather = (city) => {
  return fetch(URL + city)
  .then(res => res.json())
  .then(resJson => resJson.list[0].main.temp)
}

export default getWeather;