import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import axios from "axios";

import App from "./App";

import "./styles/global.scss";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
