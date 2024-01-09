import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { backToLobby, loadGame } from "../../redux/actions/loadGameAction";

const GameView = ({ gameCode, games, backToLobby, loadGame }) => {
  // Launch the game when the component mounts or when the gameCode or games array changes
  useEffect(() => {
    // Check if gameCode exists and the necessary global objects are available
    if (gameCode && window.comeon && window.comeon.game) {
      // Launch the game using the provided gameCode
      window.comeon.game.launch(gameCode);
    }
  }, [gameCode, games]);

  // Handle the "Back" button click event
  const onClick = () => {
    // Navigate back to the lobby
    backToLobby();
  };

  // Handle the game selection dropdown change event
  const onChange = (e) => {
    // Load the selected game based on the dropdown value
    loadGame(e.target.value);
  };

  // Launch the game when the component mounts or when the gameCode or games array changes
  useEffect(() => {
    // Check if the necessary global objects are available
    if (window.comeon && window.comeon.game) {
      // Launch the game using the provided gameCode
      window.comeon.game.launch(gameCode);
    }
  }, [gameCode, games]);

  return (
    <div className="ingame">
      <div className="ui grid centered">
        <div className="eight wide column">
          {/* "Back" button to return to the lobby */}
          <div
            className="ui left floated secondary button inverted"
            onClick={onClick}
          >
            <i className="left chevron icon" />
            Back
          </div>
        </div>
        <div className="eight wide right aligned column">
          {/* Dropdown to select a different game */}
          <div className="ui form">
            <div className="field">
              <select onChange={onChange} value={gameCode}>
                {games &&
                  games.map((game) => (
                    <option key={game.code} value={game.code}>
                      {game.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Container for launching the game */}
      <div className="ui grid centered">
        <div className="ten wide column">
          <div id="game-launch" />
        </div>
      </div>
    </div>
  );
};

GameView.propTypes = {
  gameCode: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
  backToLobby: PropTypes.func.isRequired,
  loadGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gameCode: state.game.code,
  games: state.content.games,
});

const mapDispatchToProps = {
  backToLobby,
  loadGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
