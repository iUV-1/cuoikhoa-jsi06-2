import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import Test from "./components/Test.js";
import "./App.css";
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <div className="App">
      <WalletMultiButton />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
