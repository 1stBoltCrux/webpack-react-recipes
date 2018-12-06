import React from 'react'

const RecipeList = (props) => {
  return(
    <div>
      <h2>Recipes</h2>
      <ul className="list-reset">
        {props.recipes.map(recipe => (

          <li className="py2 border-bottom border-bottom-dashed pointer" key={recipe.id} onClick={() => props.onClick(recipe.id)}>
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default RecipeList
