import { AUTH_SIGNIN, AUTH_SIGNOUT } from "../actions/authActions";

/* Initial State */
const initialState = null;

/* Reducer */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return action.payload.user;

    case AUTH_SIGNOUT:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
