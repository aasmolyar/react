import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import state from './components/redux/state';
import {addPost} from './components/redux/state';
import {rerenderEntireTree} from './render';

rerenderEntireTree();
