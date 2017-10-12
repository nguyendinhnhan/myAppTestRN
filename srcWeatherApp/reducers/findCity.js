const DEFAULT_STATE = {
  city: null,
  temp: null,
  isLoading: false,
  error: false
}

const findCityReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'FIND_CITY_REQUEST':
      return {
        city: null,
        temp: null,
        isLoading: true,
        error: false
      }

    case 'FIND_CITY_SUCCESS':
     return {
      city: action.city,
      temp: action.temp,
      isLoading: false,
      error: false
     }

    case 'FIND_CITY_FAIL':
     return {
      city: null,
      temp: null,
      isLoading: false,
      error: true
     }
  
    default:
      return state;
  }
}

export default findCityReducer;