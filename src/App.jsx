import { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import SwapForm from "./components/SwapForm";
import CollateralStatus from "./components/CollateralStatus";

function App() {
  const [wallet, setWallet] = useState(null);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">OCOS Swap Bridge</h1>
      <ConnectWallet setWallet={setWallet} />
      <SwapForm wallet={wallet} />
      <CollateralStatus />
    </div>
  );
}

export default App;
