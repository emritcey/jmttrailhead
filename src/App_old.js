import React from 'react';
import './assets/css/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PackingListPage from "./containers/PackingListPage/PackingListPage";
import HomePage from "./containers/HomePage/HomePage";

import Bannerimg from "./containers/Bannerimg/bannerimg.js";
import AppBar2 from "./containers/AppBar2/AppBar2.js";

const App = () => {
  return (
      <Router>
        <div>
          <header className="home-header">
            <Bannerimg /><AppBar2 />
          </header>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/packing" component={PackingListPage} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
