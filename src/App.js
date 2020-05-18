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

const App = () => {
  return (
      <Router>
        <div>
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
