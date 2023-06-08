import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
  {id: 1, message: 'Hi, how are you', likesCount: 12},
  {id: 2, message: 'Hi, how are you', likesCount: 14},
]

root.render(
  <React.StrictMode>
    <App posts = {posts}/>
  </React.StrictMode>
);

reportWebVitals();
