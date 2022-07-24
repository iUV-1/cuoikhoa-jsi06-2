import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Test from "./components/Test.js";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
