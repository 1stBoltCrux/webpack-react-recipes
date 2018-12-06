import React from 'react';
import PropTypes from 'prop-types';


const RecipeList = (props) => {
  const { recipes } = props;
  return (
    <div>
      <h2>Recipes</h2>
      <ul className="list-reset">
        {recipes.map(recipe => (

          <li className="py2 border-bottom border-bottom-dashed pointer" key={recipe.id} onClick={() => props.onClick(recipe.id)}>
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
          </li>

        ))}
      </ul>
    </div>
  );
};


RecipeList.propTypes = {
  recipes: PropTypes.object,
  // styles: PropTypes.string,
  onClick: PropTypes.func,
};

export default RecipeList;
