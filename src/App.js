import React from "react";
import { PropTypes } from "prop-types";
import "./App.css";

const App = ({ location, isLogged }) => (
  <div className="container">
    <h1>Initial commit!</h1>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isLogged: PropTypes.bool.isRequired
};


export default App;
