import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem'


const RecipeList = ({style, favorites, recipes,  ...props}) => {
  return (
    <div>

      <ul className="list-reset">
        {recipes.map(recipe => (

          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            favorited={favorites.includes(recipe.id)}
            {...props}/>

        ))}
      </ul>
    </div>
  );
};


RecipeList.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  onClick: PropTypes.func,
};

export default RecipeList;
