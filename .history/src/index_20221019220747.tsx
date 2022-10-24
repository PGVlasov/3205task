import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { setUpStore } from "./store/reducers/store";
import App from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setUpStore();
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
