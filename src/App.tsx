import "./App.css";
import { Message } from "./components/Message/Message";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { RootStateType } from "./components/Redux/State";
import { FC } from "react";

type PropsTypes = {
  state: RootStateType;
  dispatch: (action: any) => void;
};

export const App: FC<PropsTypes> = ({ state, dispatch }) => {
  const {
    profilePage: { posts, messageForNewPost },
    dialogPage: { dialogs, messages, newMessageText },
  } = state;

  return (
    <BrowserRouter>
      <div className={"app-bg"}>
        <Header />
        <div className={"app-wrapper"}>
          <Nav />
          <div className={"app-wrapper-content"}>
            <Route
              path="/message/"
              render={() => (
                <Message
                  messages={messages}
                  dialogs={dialogs}
                  dispatch={dispatch}
                  newMessageText={newMessageText}
                />
              )}
            />
            <Route
              path="/profile/"
              render={() => (
                <Profile
                  posts={posts}
                  dispatch={dispatch}
                  messageForNewPost={messageForNewPost}
                />
              )}
            />
            <Route path="/news/" component={News} />
            <Route path="/music/" component={Music} />
            <Route path="/settings/" component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
