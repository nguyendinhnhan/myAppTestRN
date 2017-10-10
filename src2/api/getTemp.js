const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=0f16fc5bd1ba415f0894e3da64ebf855&q=';

const getTemp = city => {
  return fetch(URL + city)
  .then(res => res.json())
  .then(resJSON => resJSON.list[0].main.temp);
}

export default getTemp;