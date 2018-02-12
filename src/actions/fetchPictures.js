import axios from 'axios';
import { FETCH_PICTURES } from './actionTypes';

export const fetchPictures = (color, searchQuery) => {
  return dispatch => {
    dispatch({
      type: FETCH_PICTURES,
      payload: axios.get(
        `https://pixabay.com/api/?key=${
          process.env.REACT_APP_PIXABAY_KEY
        }&q=${color}+${searchQuery}&image_type=photo`,
      ),
    });
  };
};
