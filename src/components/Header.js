import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>My album App</h1>
    <NavLink to="/">Home Page</NavLink>
    <NavLink to="/help">Help Page</NavLink>
  </header>
);

export { Header as default };
