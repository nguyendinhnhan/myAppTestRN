const DEFAULT_STATE = {
  city: null,
  temp: null,
  isLoading: false,
  error: false
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'START_FETCH':
      return {
        city: null,
        temp: null,
        isLoading: true,
        error: false
      }

    case 'FETCH_SUCCESS':
     return {
      city: action.city,
      temp: action.temp,
      isLoading: false,
      error: false
     }

    case 'FETCH_ERROR':
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

export default reducer;