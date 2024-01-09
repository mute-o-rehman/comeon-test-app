import React from "react";
import LoginView from "./Login/LoginView";
import LobbyView from "./Lobby/LobbyView";
import GameView from "./Game/GameView";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Main = ({ isLoginSuccess, isLogoutSuccess, gameToLoad }) => {
  // Determine which view to display based on login status and gameToLoad
  const displayLoginView = (!isLoginSuccess || isLogoutSuccess) && !gameToLoad;

  const displayLoobbyView = isLoginSuccess && !isLogoutSuccess && !gameToLoad;

  const displayGameView = isLoginSuccess && !isLogoutSuccess && gameToLoad;

  return (
    <div className="main container">
      {displayLoginView && <LoginView />}
      {displayLoobbyView && <LobbyView />}
      {displayGameView && <GameView />}
    </div>
  );
};

Main.propTypes = {
  isLoginSuccess: PropTypes.bool.isRequired,
  gameToLoad: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isLoginSuccess: state.login.isLoginSuccess,
  isLogoutSuccess: state.login.isLogoutSuccess,
  gameToLoad: state.game.code,
});

export default connect(mapStateToProps)(Main);
