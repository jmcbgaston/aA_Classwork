import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/root.jsx";

import { fetchTodos } from "./util/todo_api_util.js";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  window.store = store;
  // store.dispatch((dispatch) => {
  //   console.log("If this prints out, the thunk middleware is working!");
  // });
  ReactDOM.render(<Root store={store} />, document.getElementById("main"));
});
