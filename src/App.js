import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { verifyJWT } from "./utils/JWThelpers";

import PrivateRoute from "./components/PrivateRoute";
import NavbarComp from "./components/Navbar";
import LoginView from "./views/LoginView";
import NewsList from "./views/News/NewsList";
import ArticleDetail from "./views/News/ArticleDetail";

const App = ({ location, isLogged, history }) => (
  <div className="h-100">
    {isLogged && <NavbarComp history={history} />}
    <div className="container-fluid h-100">
      <Switch>
        <Route path="/login" component={LoginView} />
        <PrivateRoute path="/not-found" component={() => <h1>Not found</h1>} />
        <PrivateRoute exact path="/" component={NewsList} />
        <PrivateRoute path="/:id" component={ (props) => <ArticleDetail {...props} />} />
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

const mapStateToProps = state => {
  return {
    isLogged: verifyJWT()
  };
};

export default connect(mapStateToProps)(App);
