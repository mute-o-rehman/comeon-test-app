import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../getAction";
import * as types from "../types";
import games from "../../../../mock/mock-data.json";
import categories from "../../../../mock/mock-data.json";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("get actions test", () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it("creates GET_ALL_GAMES after successfuly fetching from API", async () => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: games,
      });
    });

    const expectedActions = [{ type: types.GET_ALL_GAMES, payload: games }];

    const store = mockStore({ payload: [] });

    return store.dispatch(actions.getAllGames()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates GET_ALL_CATEGORIES after successfuly fetching from API", async () => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: categories,
      });
    });

    const expectedActions = [
      { type: types.GET_ALL_CATEGORIES, payload: categories },
    ];

    const store = mockStore({ payload: [] });

    return store.dispatch(actions.getAllCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
