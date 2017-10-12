const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=0f16fc5bd1ba415f0894e3da64ebf855&q=';
const URLAll = 'http://samples.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=b1b15e88fa797225412429c1c50c122a1';

export const findCityAPI = city => {
  return fetch(URL + city)
  .then(res => res.json())
  .then(resJson => resJson.list[0].main.temp)
}

export const fetchAllWeatherAPI = cities => {
  return fetch (URLAll)
  .then(res => res.json())
  .then(resJson => {
    let result = resJson.list.map(
      e => ({ 
          id: e.id, 
          name: e.name, 
          temp: e.main.temp 
        })
    )
    //console.log(result);
    return result;
  });
}
