import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import MessageContainer from "./components/Message/MessageContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={"app-bg"}>
        <HeaderContainer />
        <div className={"app-wrapper"}>
          <Nav />
          <div className={"app-wrapper-content"}>
            <Route
              path={"/"}
              exact
              render={() => <Redirect to={"/profile"} />}
            />

            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/message/" render={() => <MessageContainer />} />
            <Route path="/users/" render={() => <UsersContainer />} />

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
