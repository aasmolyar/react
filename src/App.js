import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';


import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
      <div  className='app-wrapper-content'>
{      <Routes>
        <Route path='/dialogs' component={Dialogs} /> 
        <Route path='/profile' component={Profile} /> 
        <Route path='/news' component={News} /> 
      </Routes>}
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
