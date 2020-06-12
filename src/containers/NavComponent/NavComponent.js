import React from 'react';
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="stroke">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        {/*<li><NavLink to="/components/Underconstruction">Route</NavLink></li>*/}
        <li><NavLink to="/gear">Get the Gear</NavLink></li>
        <li><NavLink to="/meals">Meal Planner</NavLink></li>
        {/*<li><NavLink to="/components/Underconstruction">Articles</NavLink></li>*/}
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  );
}
