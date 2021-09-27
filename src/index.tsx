import "./index.css";
import store from "./Redux/ReduxStore";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "./StoreContext";

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
