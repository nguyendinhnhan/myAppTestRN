const DEFAULT_STATE = {
  arrCities: null,
  requesting: false,
  error: false
}

const yourCityReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ALL_WEATHER_REQUEST':
      return {
        arrCities: null,
        requesting: true,
        error: false
      }
    case 'FETCH_ALL_WEATHER_SUCCESS':
      return {
        arrCities: action.arrCities,
        requesting: false,
        error: false
      }
    case 'FETCH_ALL_WEATHER_FAIL': 
      return {
        arrCities: null,
        requesting: false,
        error: false
      }
    default:
      return state;
  }
}

export default yourCityReducer;