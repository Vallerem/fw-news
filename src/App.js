import React from "react";
import { PropTypes } from "prop-types";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginView from "./views/LoginView";
import PrivateRoute from "./components/PrivateRoute";

const App = ({ location, isLogged }) => (
  <div className="h-100">
    <Navbar />
    <div className="container-fluid h-100">
      {/* {isLogged && <Navbar />} */}
      <Switch>
        <PrivateRoute exact path="/" component={() => <h1>Hey you!!</h1>} />
        <PrivateRoute path="/login" component={LoginView} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isLogged: PropTypes.bool.isRequired
};

export default App;
