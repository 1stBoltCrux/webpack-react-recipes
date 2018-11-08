import React from 'react'

const RecipeDetail = (props) => {
  console.log(props);
  if (props.recipe){
    return(
      <div className="pl4">
        <h2>{props.recipe.name}</h2>
        <img src={props.recipe.image}/>
        <div>
          <span>{props.recipe.category}</span>
          <span>{props.recipe.calories}</span>
        </div>
        <h3>Ingredients</h3>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>
            {ingredient}
          </li>
        ))}
      </div>
    )
  } else {
    return <h3>Please select a recipe to view detail</h3>
  }
}

export default RecipeDetail
