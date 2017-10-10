import getTemp from '../api/getTemp';

export const startFetchData = () => {
    return { type: 'START_FETCH' };
}

export const fetchSuccess = (city, temp) => {
    return { 
        type: 'FETCH_SUCCESS',
        city,
        temp 
    };
}

export const fetchError = () => {
    return { type: 'FETCH_ERROR' };
}

export const fetchDataThunk = (city) => {
    dispatch(startFetchData());

    return dispatch => {
        getTemp(city)
        .then(temp => dispatch(fetchSuccess(city, temp)))
        .catch(() => dispatch(fetchError()));
    };
}