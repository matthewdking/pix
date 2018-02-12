import {
  FETCH_PICTURES_PENDING,
  FETCH_PICTURES_FULFILLED,
  FETCH_PICTURES_REJECTED,
} from '../actions/actionTypes';

const initialState = {
  pictures: [],
  fetched: false,
  isFetching: false,
  error: false,
};

export const fetchPicturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PICTURES_PENDING:
      return {
        ...state,
        pictures: [],
        fetched: false,
        isFetching: true,
        error: false,
      };
    case FETCH_PICTURES_FULFILLED:
      return {
        ...state,
        pictures: action.payload.data.hits.slice(0, 5),
        fetched: true,
        isFetching: false,
        error: false,
      };
    case FETCH_PICTURES_REJECTED:
      return {
        ...state,
        pictures: [],
        fetched: false,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
