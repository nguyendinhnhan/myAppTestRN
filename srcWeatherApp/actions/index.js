import { findCityAPI, fetchAllWeatherAPI } from '../api/getWeather';

export const findCityRequest = () => {
  return {
    type: 'FIND_CITY_REQUEST'
  }
}

export const findCitySuccess = (city, temp) => {
  return {
    type: 'FIND_CITY_SUCCESS',
    city,
    temp
  }
}

export const findCityFail = () => {
  return {
    type: 'FIND_CITY_FAIL'
  }
}

export const findCityThunk = (city) => {
  return dispatch => {
    dispatch(findCityRequest());
    findCityAPI(city)
      .then(temp => dispatch(findCitySuccess(city, temp)))
      .catch(() => dispatch(findCityFail()));
  };
}

//Fetch all city
export const fetchAllWeatherRequest = () => ({
  type: 'FETCH_ALL_WEATHER_REQUEST'
});

export const fetchAllWeatherSuccess = arrWeathers => ({
  type: 'FETCH_ALL_WEATHER_SUCCESS',
  arrWeathers
});

export const fetchAllWeatherFail = () => ({
  type: 'FETCH_ALL_WEATHER_FAIL'
});

export const fetchAllWeatherThunk = arrCities => {
  return dispatch => {
    dispatch(fetchAllWeatherRequest());
    fetchAllWeatherAPI(arrCities)
      .then(arrWeathers => dispatch(fetchAllWeatherSuccess(arrWeathers)))
      .catch(err => dispatch(fetchAllWeatherFail()));
  }
}