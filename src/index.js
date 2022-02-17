import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "normalize.css";
import { GlobalStyle } from "./GlobalStyles";
import { firebase } from "./lib/firebase.prod";
import { FireBaseContext } from "./context/firebase";

render(
  <>
    <FireBaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FireBaseContext.Provider>
  </>,
  document.getElementById("root")
);
