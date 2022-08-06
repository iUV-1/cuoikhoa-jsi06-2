import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Footer from "./components/Footer.js";
import CreateItems from "./components/CreateItems"
import AllItems from "./components/AllItems.js";

function App() {
  return (
    <div className="App">
      <NavBar className ="Header"/>
      <Routes className="Content">
        <Route path="/" element={<Home />} />
        <Route path="/Items" element={<AllItems />} />
        <Route path="/CreateItems" element={<CreateItems />} />
      </Routes>
      <Footer className="Footer"/>
    </div>
  );
}

export default App;
