import {combineReducers} from '@reduxjs/toolkit';
import {main} from '../slices';

const rootReducer = combineReducers({
  main,
});

export default (state, action) => rootReducer(state, action);
