import React from "react";
import ReactDOM from "react-dom";
import App from "src/App";
import { BrowserRouter } from "react-router-dom";

// styles
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
