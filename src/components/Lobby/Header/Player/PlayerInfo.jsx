import React, { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { logout } from "../../../../redux/actions/postAction";
import { resetAllFilter } from "../../../../redux/actions/filterAction";

const PlayerInfo = () => {
  // Get dispatch function from useDispatch
  const dispatch = useDispatch();

  // Get user information using useSelector
  const { username, name, avatar, event } = useSelector(
    (state) => ({
      username: state.login.username,
      name: state.user && state.user.player ? state.user.player.name : "",
      avatar: state.user && state.user.player ? state.user.player.avatar : "",
      event: state.user && state.user.player ? state.user.player.event : "",
    }),
    shallowEqual
  );

  // Handle logout and reset all filters
  const handleLogout = useCallback(() => {
    const credentials = {
      username: username,
    };

    dispatch(logout(credentials))
      .then(() => {
        dispatch(resetAllFilter());
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }, [dispatch, username]);

  return (
    <div className="sixteen wide mobile twelve wide computer column">
      <div className="ui list">
        <div className="player item">
          <img className="ui avatar image" src={avatar} alt="avatar" />
          <div className="content">
            <div className="ui header">
              <b className="name">{name || "Default Name"}</b>
            </div>
            <div className="description event">{event || "Default Event"}</div>
          </div>
        </div>
      </div>
      <div
        className="logout ui secondary button inverted"
        onClick={handleLogout}
      >
        <i className="left chevron icon" />
        Log Out
      </div>
    </div>
  );
};

export default PlayerInfo;
