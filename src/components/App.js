import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'



class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      recipes: [],
      currentRecipe: null,
    }
  }

  componentDidMount(){
    fetch(API_URL + '/v1/recipes').then(res => res.json()).then(recipes =>
       {this.setState({recipes})
  })
  }

  onRecipeClick = (id) => {
      fetch(`${API_URL}/v1/recipes/${id}`).then(res => res.json()).then(currentRecipe =>

         {this.setState({currentRecipe})
    })
    }



  render(){
    const { recipes, currentRecipe } = this.state

    return(
      <div>
        <Header/>
        <main style={{
          display: 'flex',
        }}>
          <RecipeList
            onClick={this.onRecipeClick}
            recipes={recipes}/>
          <RecipeDetail

            recipe={currentRecipe}/>
      </main>
      </div>
    )
  }
}

export default App
