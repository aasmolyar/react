import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render';
import state from './components/redux/state';

rerenderEntireTree(state);
