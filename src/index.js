import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import CustomThemeProvider from "./theme";
import { fetchInitialDataThunk } from "./redux/actions/thunkFunctions";
import App from "./App";

store.dispatch(fetchInitialDataThunk);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
