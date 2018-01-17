// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.scss";

const container = document.getElementById("root");
if (container) {
  ReactDOM.render(<App />, container);
}
