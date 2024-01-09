import { getReducer } from "../getReducer";
import * as types from "../../actions/types";
import games from "../../../../mock/mock-data.json";
import categories from "../../../../mock/mock-data.json";

describe("get reducer test", () => {
  it("should return the initial state", () => {
    expect(getReducer(undefined, {})).toEqual({
      games: [],
      categories: [],
    });
  });

  it("should should handle the GET_ALL_GAMES", () => {
    const updateAction = {
      type: types.GET_ALL_GAMES,
      payload: games,
    };
    expect(getReducer({}, updateAction)).toEqual({ games: games });
  });

  it("should should handle the GET_ALL_CATEGORIES", () => {
    const updateAction = {
      type: types.GET_ALL_CATEGORIES,
      payload: categories,
    };
    expect(getReducer({}, updateAction)).toEqual({ categories: categories });
  });
});
