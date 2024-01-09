import { GET_ALL_GAMES, GET_ALL_CATEGORIES } from '../actions/types.js';

const initialState = {
  games: [],
  categories: []
};

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        games: action.payload
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};
