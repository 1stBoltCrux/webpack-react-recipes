import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Favorites from "./Favorites"
import NotFound from "./NotFound"

const App = () => {
  return(
    <BrowserRouter>
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/favorites" component={Favorites}/>
          <Route component={NotFound}/>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
