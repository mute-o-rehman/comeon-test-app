import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  ADD_USERNAME,
} from "../actions/types.js";

const initialState = {
  username: "",
  isLoginSuccess: false,
  loginError: "",
  isLogoutSuccess: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload,
      };
    case LOGIN_START:
      return initialState;
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogoutSuccess: true,
      };
    case ADD_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
