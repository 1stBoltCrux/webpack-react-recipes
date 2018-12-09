import React from 'react'
import PropTypes from 'prop-types'

const RecipeListItem = ({recipe, favorited, onClick, onFavorited}) => {
  return(
    <li className=" py2 border-bottom border-bottom-dashed pointer"

      key={recipe.id}
      onClick={() => onClick(recipe.id)}>
      <span
        className="mr1"
        role="img"
        aria-label="favorite"
        onClick={e => {
          e.stopPropagation();
          onFavorited(recipe.id)
        }}>
        {favorited ? '❤️' : '♡'}</span>
      <span>{recipe.name}</span>
      <span>{recipe.category}</span>
    </li>
  )
}

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func
}

export default RecipeListItem;
