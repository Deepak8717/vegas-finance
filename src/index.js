import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Betting from "./components/betting/Betting";
import BettingTileInfo from "./components/betting/BettingTileInfo";
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "./utils/getLibrary"
import "./polyfill";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<App />}></Route>
        <Route exact path="/betting" element={<Betting />}></Route>
        <Route path="/betting-tile-info" element={<BettingTileInfo />}></Route>
      </Routes>
    </BrowserRouter>
    </Web3ReactProvider>
  </React.StrictMode>
);
 