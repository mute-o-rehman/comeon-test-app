import { PLAYER_DATA } from '../actions/types.js';

const initialState = {
  player: {
    name: "",
    avatar: "",
    event: ""
  }
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_DATA:
      return {
        ...state,
        player: action.payload
      };
    default:
      return state;
  }
};
