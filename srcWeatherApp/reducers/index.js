import { combineReducers } from 'redux';

import findCity from './findCity';
import yourCity from './yourCity';

export default combineReducers({
  findCity,
  yourCity
});