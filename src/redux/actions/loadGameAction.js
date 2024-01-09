import { LOAD_GAME, BACK_TO_LOBBY } from "./types";

export const loadGame = (payload) => ({
  type: LOAD_GAME,
  payload,
});

export const backToLobby = () => ({
  type: BACK_TO_LOBBY,
});
