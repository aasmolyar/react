import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "../src/components/Header/HeaderContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initiolizeApp } from "./components/redux/app-reducer";
import { compose } from "redux";
import withRouter from "./components/common/withRouter";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initiolizeApp();
  }

  render() {
    if (!this.props.initiolized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          {
            <Routes>
              <Route
                path="/profile/:userId?"
                Component={() => <ProfileContainer store={this.props.store} />}
              />
              <Route
                path="/dialogs"
                Component={() => <DialogsContainer store={this.props.store} />}
              />
              <Route path="/users" Component={() => <UsersContainer />} />
              <Route path="/login" Component={() => <Login />} />
              <Route path="/news" Component={News} />
              <Route path="/music" Component={Music} />
              <Route path="/settings" Component={Settings} />
            </Routes>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initiolized: state.app.initiolized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initiolizeApp })
)(App);
