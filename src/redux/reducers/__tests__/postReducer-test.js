import { postReducer } from "../postReducer";
import * as types from "../../actions/types";

describe("post reducer test", () => {
  it("should return the initial state", () => {
    expect(postReducer(undefined, {})).toEqual({
      username: "",
      isLoginSuccess: false,
      isLogoutSuccess: false,
      loginError: "",
    });
  });

  it("should should handle the LOGIN_SUCCESS", () => {
    const updateAction = {
      type: types.LOGIN_SUCCESS,
      payload: true,
    };
    expect(postReducer({}, updateAction)).toEqual({ isLoginSuccess: true });
  });

  it("should should handle the LOGIN_START", () => {
    const updateAction = {
      type: types.LOGIN_START,
    };
    expect(postReducer({}, updateAction)).toEqual({
      username: "",
      isLoginSuccess: false,
      isLogoutSuccess: false,
      loginError: "",
    });
  });

  it("should should handle the LOGIN_ERROR", () => {
    const updateAction = {
      type: types.LOGIN_ERROR,
      payload: "player does not exist or wrong password",
    };
    expect(postReducer({}, updateAction)).toEqual({
      loginError: "player does not exist or wrong password",
    });
  });

  it("should should handle the LOGOUT_SUCCESS", () => {
    const updateAction = {
      type: types.LOGOUT_SUCCESS,
      payload: true,
    };
    expect(postReducer({}, updateAction)).toEqual({ isLogoutSuccess: true });
  });

  it("should should handle the ADD_USERNAME", () => {
    const updateAction = {
      type: types.ADD_USERNAME,
      payload: "eric",
    };
    expect(postReducer({}, updateAction)).toEqual({ username: "eric" });
  });
});
