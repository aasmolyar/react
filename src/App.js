import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {
          <Routes>
            <Route
              path="/profile"
              Component={() => <Profile store={props.store} />}
            />
            <Route
              path="/dialogs"
              Component={() => <DialogsContainer store={props.store} />}
            />
            <Route path="/users" Component={() => <UsersContainer />} />
            <Route path="/news" Component={News} />
            <Route path="/music" Component={Music} />
            <Route path="/settings" Component={Settings} />
          </Routes>
        }
      </div>
    </div>
  );
};

export default App;
