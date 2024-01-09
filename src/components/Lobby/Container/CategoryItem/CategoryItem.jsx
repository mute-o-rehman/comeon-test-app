import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterByCategory } from "../../../../redux/actions/filterAction";

const CategoryItem = ({ category, filterByCategory }) => {
  // Handle the category item click and prevent default anchor behavior
  const onClick = (e) => {
    e.preventDefault();
    filterByCategory(category.id);
  };

  return (
    <div className="item" onClick={onClick}>
      <div className="content">
        <div className="header">
          <a href={`/categories/${category.id}`} onClick={onClick}>
            {category.name}
          </a>
        </div>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
  filterByCategory: PropTypes.func.isRequired,
};

export default connect(null, { filterByCategory })(CategoryItem);
