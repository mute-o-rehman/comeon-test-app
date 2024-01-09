import axios from "axios";
import { GET_ALL_GAMES, GET_ALL_CATEGORIES } from "./types";

const getGamesSuccess = (payload) => ({
  type: GET_ALL_GAMES,
  payload,
});

const getCategoriesSuccess = (payload) => ({
  type: GET_ALL_CATEGORIES,
  payload,
});

export const getAllGames = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/games");
    dispatch(getGamesSuccess(res.data));
  } catch (err) {
    console.error(err.response);
  }
};

export const getAllCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/categories");
    dispatch(getCategoriesSuccess(res.data));
  } catch (err) {
    console.error(err.response);
  }
};
