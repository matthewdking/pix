import axios from 'axios';
import { FETCH_PICTURES } from './actionTypes';

export const fetchPictures = (color, searchQuery) => {
  console.log(process.env);
  return dispatch => {
    dispatch({
      type: FETCH_PICTURES,
      payload: axios
        .get(
          `https://pixabay.com/api/?key=${
            process.env.REACT_APP_PIXABAY_KEY
          }&q=${color}+${searchQuery}&image_type=photo`,
        )
        .then(res => {
          if (res.status !== 200) throw new Error('API is not working');
          return res.data.hits.slice(0, 5);
        }),
    }).catch(error => {
      console.log(error);
    });
  };
};
