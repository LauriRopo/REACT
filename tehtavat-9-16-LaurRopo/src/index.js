import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Cars, Info } from "./teht9_10.js";
import { ListForm } from "./teht11_13.js";
import { Teht14 } from "./teht14_16.js";

ReactDOM.render(
  <React.StrictMode>
    <Cars />
    <Info />
    <ListForm />
    <Teht14 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
