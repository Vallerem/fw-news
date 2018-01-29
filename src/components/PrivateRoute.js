import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { verifyJWT } from "../utils/JWThelpers";

const PrivateRoute = ({ isLogged, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogged ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isLogged: verifyJWT()
  };
}

export default connect(mapStateToProps)(PrivateRoute);
