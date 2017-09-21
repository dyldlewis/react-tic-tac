import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import historyReducer from "./reducers/history-reducer";
import stepNumberReducer from "./reducers/step-number-reducer";
import xIsNextReducer from "./reducers/xIsNext-reducer";
import App from "./components/App";

const reducers = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer
})

const store = createStore(reducers);


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react-app-root")
  );
