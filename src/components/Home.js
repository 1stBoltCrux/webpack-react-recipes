import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`).then(res => res.json()).then((recipes) => {
      this.setState({ recipes });
    });
  }

  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`).then(res => res.json()).then((currentRecipe) => {
      this.setState({ currentRecipe });
    });
  }


  render() {
    const { recipes, currentRecipe } = this.state;

    return (
      <div>
        <main className="flex px4">
          <div className="px4">
            <RecipeList

              onClick={this.onRecipeClick}
              recipes={recipes}
            />
          </div>

          <RecipeDetail
            className="ml4"

            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

export default Home;
