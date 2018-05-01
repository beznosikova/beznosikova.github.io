import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { createStore } from "redux";


function playlist(state = [], action) {

  if (action.type === "ADD_TRACK" && action.payload.title.trim() != "") {
    return [...state, action.payload];
  }
  if (action.type === "DELETE_TRACK") {
    state.splice(action.payload, 1);

    return [...state];
  }

  if (action.type === "EDIT_TRACK") {
  	state[action.payload.id]["title"] = action.payload.title;

    return [...state];
  }

  return state;
}

const store = createStore(playlist);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);