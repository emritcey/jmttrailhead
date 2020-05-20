import React, {Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "../HomePage/HomePage.js";
import Gear from "../Gear/Gear.js";
import Underconstruction from "../Underconstruction/Underconstruction.js";

class Nav_underline extends React.Component {
render() {
return (
  <HashRouter>
      <nav class="stroke">
          <ul>
            <li><NavLink to="/components/Homepage"> Home</NavLink></li>
            <li><NavLink to="/components/Underconstruction">Route</NavLink></li>
            <li><NavLink to="/components/Gear">Gear</NavLink></li>
            <li><NavLink to="/components/Underconstruction">Food</NavLink></li>
            <li><NavLink to="/components/Underconstruction">Articles</NavLink></li>
            <li><NavLink to="/components/Underconstruction">About</NavLink></li>
          </ul>
      </nav>

      <Route exact path="/components/HomePage" component={Home} />
      <Route exact path="/components/Gear" component={Gear} />
      <Route exact path = "/components/Underconstruction"  component={Underconstruction} />
    </HashRouter>
 );
  }}
export default Nav_underline
