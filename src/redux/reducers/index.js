import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { playerReducer } from "./playerReducer";
import { getReducer } from "./getReducer";
import { loadGameReducer } from "./loadGameReducer";
import { filterReducer } from "./filterReducer";

export default combineReducers({
  login: postReducer,
  user: playerReducer,
  content: getReducer,
  game: loadGameReducer,
  filter: filterReducer
});
