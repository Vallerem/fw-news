import React from "react";
import { PropTypes } from "prop-types";
import "./App.css";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

const App = ({ location, isLogged }) => (
  <div>
    <Navbar />
    <div className="container-fluid">
      {/* {isLogged && <Navbar />} */}
      <PrivateRoute exact path="/" component={() => <h1>Hey you!!</h1>} />
      <PrivateRoute exact path="/login" component={() => <h1>Login</h1>} />
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
