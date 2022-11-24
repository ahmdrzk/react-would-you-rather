import { combineReducers } from "redux";
import authReducer from "./authReducer";
import questionsReducer from "./questionsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  questions: questionsReducer,
});

export default rootReducer;
