import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./components/redux/redux-store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let _callSubscriber = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals();
};

_callSubscriber(store.getState());

store.subscribe(() => {
  let state = store.getState();
  _callSubscriber(state);
});
