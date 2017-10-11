
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