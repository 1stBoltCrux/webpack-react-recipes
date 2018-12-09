import React from 'react';
import RecipeList from './RecipeList'

const Favorites = ({ state, handleFavorite}) => {
  return (
    <div>
      <h2 className="h2 px4">Favorites</h2>
      <RecipeList
        recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
        favorites={state.favorites}
        onFavorited={handleFavorite}/>
    </div>
  )
}

export default Favorites
