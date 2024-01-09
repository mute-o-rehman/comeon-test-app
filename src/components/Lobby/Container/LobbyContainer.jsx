import React, { useEffect } from "react";
import GameItem from "./GameItem/GameItem";
import CategoryItem from "./CategoryItem/CategoryItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAllGames,
  getAllCategories,
} from "../../../redux/actions/getAction";

const LobbyContainer = ({
  games,
  categories,
  currentCategory,
  searchGame,
  getAllGames,
  getAllCategories,
}) => {
  // Fetch all games and categories when the component mounts
  useEffect(() => {
    getAllGames();
    getAllCategories();
  }, [getAllGames, getAllCategories]);

  // Filter games based on the current category and search query
  let filteredGames;
  filteredGames = games.filter(
    (game) =>
      game.categoryIds && game.categoryIds.indexOf(currentCategory) !== -1
  );

  if (searchGame && searchGame.length > 0) {
    filteredGames = games.filter(
      (game) =>
        game.name &&
        game.name.toLowerCase().search(searchGame.toLowerCase()) !== -1
    );
  }

  return (
    <div className="ui grid">
      <div className="sixteen wide mobile four wide computer right floated column">
        <h3 className="ui dividing header">Categories</h3>
        <div className="ui middle aligned list">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="sixteen wide mobile twelve wide computer column">
        <h3 className="ui dividing header">Games</h3>
        {!filteredGames.length && (
          <div className="content">
            <h3 className="header">No Match Found</h3>
          </div>
        )}
        {filteredGames.map((game) => (
          <GameItem key={game.code} game={game} />
        ))}
      </div>
    </div>
  );
};

LobbyContainer.propTypes = {
  games: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.number.isRequired,
  searchGame: PropTypes.string.isRequired,
  getAllGames: PropTypes.func.isRequired,
  getAllCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  games: state.content.games,
  categories: state.content.categories,
  currentCategory: state.filter.categoryIndex,
  searchGame: state.filter.gameName,
});

export default connect(mapStateToProps, { getAllGames, getAllCategories })(
  LobbyContainer
);
