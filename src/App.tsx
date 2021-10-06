import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import MessageContainer from "./components/Message/MessageContainer";
import {UsersContainer} from "./components/Users/UsersContainer";



export const App = () => {
  return (
    <BrowserRouter>
      <div className={"app-bg"}>
        <Header />
        <div className={"app-wrapper"}>
          <Nav />
          <div className={"app-wrapper-content"}>
            <Route path={"/"} exact render={() => <Redirect to={"/profile"} />}/>

            <Route path="/profile/" render={() => <Profile />} />
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
