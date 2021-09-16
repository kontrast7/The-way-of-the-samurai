import "./index.css";
import state, {
  addMessage,
  addPost,
  RootStateType,
  subscribe,
  updateNewMessageText,
  updateNewPostText,
} from "./components/Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderTree(state);

subscribe(renderTree);
