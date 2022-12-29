import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CardProvider from "./context/CardProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);
