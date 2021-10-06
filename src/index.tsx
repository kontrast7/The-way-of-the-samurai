import React from "react";
import App from "./App";
import "./index.css";
import store from "./Redux/ReduxStore";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

let renderAllTree = () => {
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root")
);
};

renderAllTree();

store.subscribe(renderAllTree);
