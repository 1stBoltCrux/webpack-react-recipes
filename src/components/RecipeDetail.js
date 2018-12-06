import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RecipeDetail = (props) => {
  const { recipe, style, className } = props;
  if (recipe) {
    return (
      <div className="pl4 p2 bg-white">
        <h2>{recipe.name}</h2>
        <img
          className="fit"
          src={recipe.image}
          alt={recipe.name}
        />
        <div>
          <span>{recipe.category}</span>
          <span>{recipe.calories}</span>
        </div>
        <h3>Ingredients</h3>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>
            {ingredient}
          </li>
        ))}
      </div>
    );
  }
  return (
    <p
      style={style}
      className={classNames(`h3 p2 bg-white italic center ${className}`)}
    >
Please select a recipe to view detail
    </p>
  );
};

export default RecipeDetail;

RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
  className: PropTypes.string,
};
