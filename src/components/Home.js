import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };
  }



  onRecipeClick = (id) => {
    fetch(`${API_URL}/v1/recipes/${id}`).then(res => res.json()).then((currentRecipe) => {
      this.setState({ currentRecipe });
    });
  }




  render() {
    const { recipes, favorites} = this.props.state
    const { handleFavorite} = this.props

    return (
      <div>
        <main className="flex px4">
          <div className="px4">
            <h2>Recipes</h2>
            <RecipeList
              favorites={favorites}
              onFavorited={handleFavorite}
              onClick={this.onRecipeClick}
              recipes={recipes}
            />
          </div>

          <RecipeDetail
            className="ml4"

            recipe={this.state.currentRecipe}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  handleFavorite: PropTypes.func,
  favorites: PropTypes.array,
  onClick: PropTypes.func,
  recipes: PropTypes.array
}

export default Home;
