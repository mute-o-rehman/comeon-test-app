import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "../postAction";
import * as types from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("post actions test", () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it("creates LOGIN_START, LOGIN_SUCCESS, ADD_USERNAME and PLAYER_DATA after successfully fetching from API login", async () => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          player: {
            name: "Eric Beard",
            avatar: "images/avatar/eric.jpg",
            event: "I saw you won 500 SEK last time!",
          },
        },
      });
    });

    const expectedActions = [
      { type: types.LOGIN_START },
      { type: types.LOGIN_SUCCESS, payload: true },
      { type: types.ADD_USERNAME, payload: "eric" },
      {
        type: types.PLAYER_DATA,
        payload: {
          name: "Eric Beard",
          avatar: "images/avatar/eric.jpg",
          event: "I saw you won 500 SEK last time!",
        },
      },
    ];

    const store = mockStore({ payload: false });

    await store.dispatch(actions.login({ username: "eric", password: "dad" }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates LOGIN_START and LOGIN_ERROR after unsuccessfully fetching from API login", async () => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          error: "player does not exist or wrong password",
        },
      });
    });

    const expectedActions = [
      { type: types.LOGIN_START },
      {
        type: types.LOGIN_ERROR,
        payload: "player does not exist or wrong password",
      },
    ];

    const store = mockStore({ payload: true });

    await store.dispatch(actions.login({ username: "erik", password: "add" }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("creates LOGOUT_SUCCESS after successfully fetching from API logout", async () => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {},
      });
    });

    const expectedActions = [{ type: types.LOGOUT_SUCCESS, payload: true }];

    const store = mockStore({ payload: false });

    await store.dispatch(actions.logout({ username: "eric" }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
