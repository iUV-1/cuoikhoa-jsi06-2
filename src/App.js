
import './App.css';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

function App() {
  return (
    <div className="App">
     <WalletMultiButton/>
    </div>
  );
}

export default App;
