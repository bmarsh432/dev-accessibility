import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const config = {
  runOnly: {
    type: "tag",
    values: ["wcag21a", "wcag21aa"],
  },
  disableDeduplicate: true,
};

if (process.env.NODE_ENV !== "production") {
  var axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000, config);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
