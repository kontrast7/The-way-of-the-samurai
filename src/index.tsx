import "./index.css";
import store from "./Redux/ReduxStore";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderAllTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderAllTree();

store.subscribe(renderAllTree);
