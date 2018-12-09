import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Favorites from "./Favorites"
import NotFound from "./NotFound"

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      recipes: [],
      favorites: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`).then(res => res.json()).then((recipes) => {
      this.setState({ recipes });
    });
  }

  handleFavorite = id => {
    this.setState(({favorites, ...state}) => {
      console.log(favorites);
      const idx = favorites.indexOf(id);
      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f !== id)}
      } else {
        return { ...state, favorites: [...favorites, id]}
      }
    })
  }

  render(){
    return(
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from='/Home' to='/'/>
            <Route exact path="/" render={() => (
              <Home state={this.state} handleFavorite={this.handleFavorite}/>
            )}/>
            <Route path="/favorites" render={() => (
              <Favorites state={this.state} handleFavorite={this.handleFavorite}/>)}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </BrowserRouter>
    )

  }
}

export default App;
