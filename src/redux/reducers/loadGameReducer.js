import { LOAD_GAME, BACK_TO_LOBBY } from '../actions/types.js';

const initialState = {
  code: ""
};

export const loadGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GAME:
      return {
        ...state,
        code: action.payload
      };
    case BACK_TO_LOBBY:
      return initialState;
    default:
      return state;
  }
};
