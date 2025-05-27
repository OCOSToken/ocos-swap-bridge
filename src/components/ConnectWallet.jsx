import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet({ setWallet }) {
  const [address, setAddress] = useState(null);

  async function connect() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
      setWallet(accounts[0]);
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  }

  return (
    <div className="p-4">
      <button onClick={connect} className="bg-black text-white px-4 py-2 rounded">
        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"}
      </button>
    </div>
  );
}
