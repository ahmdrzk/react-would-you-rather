import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./middlewares/loggerMiddleware";
import rootReducer from "./reducers";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export default store;
