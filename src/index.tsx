import React from "react";
import App from "./App";
import "./index.css";
import store from "./Redux/ReduxStore";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

let renderAllTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderAllTree();

store.subscribe(renderAllTree);
