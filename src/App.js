import React from 'react';
import './assets/css/main.scss';
import {
  ThemeProvider,
} from '@material-ui/core/styles';

import {theme} from './assets/theme';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PackingListPage from "./containers/PackingListPage/PackingListPage";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import UserProvider from "./context/UserProvider";
import PrivateRoute from "./components/PrivateRoute";
import BannerComponent from "./containers/BannerComponent/BannerComponent.js";
import NavComponent from "./containers/NavComponent/NavComponent";
import HomePage from "./containers/HomePage/HomePage.js";
import MealPlan from "./containers/MealPlan/MealPlan";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <BannerComponent />
          <NavComponent />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/gear" component={PackingListPage} />
                <Route exact path="/meals" component={MealPlan} />
                <UserProvider>
                  <PrivateRoute path="/profile" component={ProfilePage} />
                </UserProvider>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
