import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

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
        {recipe.ingredients &&
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>

        }

        <h3>Steps</h3>
        {props.recipe.steps &&
          <ol>{props.recipe.steps.map(step => <li key={step}>{step}</li>)}</ol>
        }
          <Link to={`/recipe/${props.recipe.id}`}>See More</Link>

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
