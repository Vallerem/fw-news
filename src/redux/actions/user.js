import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import userAPI from "../../api/auth";
import setAuthorizationHeader from "../../utils/setAuthorizationHeader";

export const userLoggedIn = token => ({
  type: USER_LOGGED_IN,
  token
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  userAPI.login(credentials).then(token => {
    localStorage.JWT = token;
    localStorage.setItem("JWT", token);
    setAuthorizationHeader(token);
    dispatch(userLoggedIn(token));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("JWT");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};
