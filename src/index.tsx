/* eslint-disable no-console */
import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import "./index.css";
import axios from "axios";

import App from "./App";

import "./styles/global.scss";
import "./styles/variables.scss";

const { REACT_APP_API_URL, NODE_ENV } = process.env;

console.log("apiHost: ", REACT_APP_API_URL);
console.log("environment: ", NODE_ENV);

axios.defaults.baseURL = REACT_APP_API_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
