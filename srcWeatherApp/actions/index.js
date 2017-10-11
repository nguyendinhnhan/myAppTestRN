import getWeather from '../api/getWeather';

export const startFetch = () => {
  return {
    type: 'START_FETCH'
  }
}

export const fetchSuccess = (city, temp) => {
  return {
    type: 'FETCH_SUCCESS',
    city,
    temp
  }
}

export const fetchError = () => {
  return {
    type: 'FETCH_ERROR'
  }
}

export const fetchDataThunk = (city) => {
  dispatch(startFetch());

  return dispatch => {
      getWeather(city)
      .then(temp => dispatch(fetchSuccess(city, temp)))
      .catch(() => dispatch(fetchError()));
  };
}