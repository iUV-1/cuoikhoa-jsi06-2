import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import WalletContextProvider from "./context/WalletContextProvider";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WalletContextProvider>
        <App />
      </WalletContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
