import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

//The global State
const initialState = {
  magazines: [],
  authors: [],
};

//The actions
const addMagazine = { type: "ADD_MAGAZINE", magazine: "Vogue" };
const addAuthor = { type: "ADD_AUTHOR", author: "Emma Specter" };

//The Reducer
function myReducer(state = initialState, action) {
  if (action.type === "ADD_MAGAZINE") {
    return {
      ...state,
      magazines: [...state.magazines, action.magazine],
    };
  } else if (action.type === "ADD_AUTHOR") {
    return {
      ...state,
      authors: [...state.authors, action.author],
    };
  }
}

let store = createStore(myReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//Dispatching actions
store.dispatch(addMagazine);
store.dispatch(addAuthor);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
