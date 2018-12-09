import React from 'react';
import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import recipe from './../static/images/recipe.png'

const HeaderLink = ({children, ...props}) => {
  return (
    <NavLink
      exact
      to="/"
      className="p1 mx2 black text-decoration-none"
      activeClassName="bg-white"
      {...props}>
      {children}
    </NavLink>
  )

}

const Header = () => (
  <div className="px4 flex items-center justify-between ">
    <h1 className="h1">
      <span role="img" aria-label="Chinese Food">🥡</span>
      MyRecipes
    </h1>
    <img src={recipe} alt="spices" style={{width: 200}}/>
    <HeaderLink to='/'>Home</HeaderLink>
    <HeaderLink to='/favorites'>Favorites</HeaderLink>
  </div>
);

HeaderLink.propTypes = {
  children: PropTypes.node,

}

export default Header;
