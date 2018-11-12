import React from 'react'
import classNames from 'classnames';

const RecipeDetail = (props) => {
  console.log(props);
  if (props.recipe){
    return(
      <div className="pl4 p2 bg-white">
        <h2>{props.recipe.name}</h2>
        <img className="fit" src={props.recipe.image}/>
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
    return <p style={props.style}
      className={classNames(`h3 p2 bg-white italic center ${props.className}`)}>Please select a recipe to view detail</p>
  }
}

export default RecipeDetail
