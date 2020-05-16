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
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import UserProvider from "./context/UserProvider";
import PrivateRoute from "./components/PrivateRoute";
import Bannerimg from "./containers/Bannerimg/Bannerimg.js";
import Nav_underline from "./containers/Nav_underline/Nav_underline";

const App = () => {
  return (
      <Router>
        <div>
          <Bannerimg />
          <Nav_underline />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/packing" component={PackingListPage} />
                <UserProvider>
                  <PrivateRoute path="/profile" component={ProfilePage} />
                </UserProvider>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
