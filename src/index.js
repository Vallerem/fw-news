import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css"; // Necessary for Reactstrap
import "./App.css";

import rootReducer from "./redux/rootReducer";
import App from "./App";

const initialState = { 
  user: localStorage.getItem("JWT") || null
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
