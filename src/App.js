import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { render } from '@testing-library/react';
import store from './components/redux/state';

const App = (props) => {

  return (

      <div className='app-wrapper'>
        <Header />
        <Navbar />
      <div  className='app-wrapper-content'>
{      <Routes>
        <Route path='/profile' Component = {() => <Profile profilePage={props.state.profilePage}
                                                           dispatch={props.dispatch} />} /> 
        <Route path='/dialogs' Component = {() => <Dialogs store = {props.store} />} /> 
        <Route path='/news' Component={News} /> 
        <Route path='/music' Component={Music} /> 
        <Route path='/settings' Component={Settings} /> 
      </Routes>}
      </div>
      </div>

  )
}

export default App;
