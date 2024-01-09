import axios from "axios";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  ADD_USERNAME,
  PLAYER_DATA,
} from "./types";

const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const addUserName = (payload) => ({
  type: ADD_USERNAME,
  payload,
});

const playerData = (payload) => ({
  type: PLAYER_DATA,
  payload,
});

const networkErrorMessage =
  "There is a network problem. Please try again in a few minutes";

export const login = (postData) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3001/login", postData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    dispatch(loginSuccess(true));
    dispatch(addUserName(postData.username));
    dispatch(playerData(res.data.player));
  } catch (err) {
    console.error("Login Error:", err);
    err.response
      ? dispatch(loginError(err.response.data.error))
      : window.alert(networkErrorMessage);
  }
};

// ... (other imports and action creators)

export const logout = (postData) => async (dispatch) => {
  try {
    await axios.post("http://localhost:3001/logout", postData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // Dispatch the logoutSuccess action after successful logout
    dispatch(logoutSuccess());

    // Returning a resolved promise to indicate successful logout
    return Promise.resolve();
  } catch (err) {
    const errorMessage =
      (err.response && err.response.data.error) || networkErrorMessage;

    // Returning a rejected promise to indicate logout failure
    return Promise.reject(errorMessage);
  }
};
