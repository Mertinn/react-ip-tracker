import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { MapProvider } from "./contexts/map";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Rubik', sans-serif;
    }
    svg {
      display: block;
    }
    ul {
      list-style-type: none;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MapProvider>
      <App />
    </MapProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
