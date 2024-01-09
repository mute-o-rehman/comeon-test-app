import React, { useState } from "react";
import { connect } from "react-redux";
import { filterByName } from "../../../../redux/actions/filterAction";

const SearchBar = ({ filterByName }) => {
  const [searchgame, setSearchGame] = useState("");

  const onChange = (e) => {
    setSearchGame(e.target.value);
    filterByName(e.target.value);
  };

  return (
    <div className="sixteen wide mobile four wide computer column">
      <div className="ui icon input fluid">
        <input
          type="text"
          name="searchgame"
          placeholder="Search Game"
          onChange={onChange}
          value={searchgame}
        />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default connect(null, { filterByName })(SearchBar);
