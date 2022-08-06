import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Test from "./components/Test.js";
import CreateItems from "./components/CreateItems"
import AllItems from "./components/AllItems.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Items" element={<AllItems />} />
        <Route path="/CreateItems" element={<CreateItems />} />
      </Routes>
     <Test /> 
    </div>
  );
}

export default App;
