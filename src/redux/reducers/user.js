import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";

export default function userrrr(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.token;
    case USER_LOGGED_OUT:
      return null;
    default:
      return state;
  }
}
