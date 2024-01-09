import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadGame } from "../../../../redux/actions/loadGameAction";

const GameItem = ({ game, loadGame }) => {
  // Handle the "Play" button click
  const onClick = () => {
    loadGame(game.code);
  };

  return (
    <div className="ui relaxed divided game items links">
      <div className="game item">
        <div className="ui small image">
          <img src={game.icon} alt="game-icon" />
        </div>
        <div className="content">
          <div className="header">
            <b className="name">{game.name}</b>
          </div>
          <div className="description">{game.description}</div>
          <div className="extra">
            <div
              className="play ui right floated secondary button inverted"
              onClick={onClick}
            >
              Play
              <i className="right chevron icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="ui divider mt-0"></div>
    </div>
  );
};

GameItem.propTypes = {
  game: PropTypes.object.isRequired,
  loadGame: PropTypes.func.isRequired,
};

export default connect(null, { loadGame })(GameItem);
