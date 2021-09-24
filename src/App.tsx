import "./App.css";
import { Message } from "./components/Message/Message";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { RootStateType } from "./Redux/Store";
import { FC } from "react";

type PropsTypes = {
  state: RootStateType;
  dispatch: (action: any) => void;
};

export const App: FC<PropsTypes> = ({ state, dispatch }) => {
  const { profilePage, dialogPage } = state;

  return (
    <BrowserRouter>
      <div className={"app-bg"}>
        <Header />
        <div className={"app-wrapper"}>
          <Nav />
          <div className={"app-wrapper-content"}>
            <Route
              path={"/"}
              exact
              render={() => <Redirect to={"/profile"} />}
            />

            <Route
              path="/profile/"
              render={() => (
                <Profile dispatch={dispatch} profilePage={profilePage} />
              )}
            />

            <Route
              path="/message/"
              render={() => (
                <Message
                  dispatch={dispatch}
                  dialogPage={dialogPage}
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
