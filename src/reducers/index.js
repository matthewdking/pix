import { combineReducers } from 'redux';
import { fetchPicturesReducer } from './fetchPicturesReducer';

export const rootReducers = combineReducers({
  pictures: fetchPicturesReducer,
});
