import "./index.css";
import store from "./components/Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
        addMessage={store.addMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTree();

store.subscribe(renderTree);
