import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "normalize.css";
import { GlobalStyle } from "./GlobalStyles";

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
