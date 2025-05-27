import { useState } from "react";
import { ethers } from "ethers";

export default function SwapForm({ wallet }) {
  const [amount, setAmount] = useState("");

  const handleSwap = async () => {
    if (!wallet || !amount) {
      alert("Connect wallet and enter amount.");
      return;
    }

    try {
      const contractAddress = process.env.REACT_APP_OCOS_CONTRACT_ADDRESS;
      const abi = [
        "function swapToBTC(uint256 ocosAmount) public",
      ];

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const value = ethers.parseUnits(amount, 18);
      const tx = await contract.swapToBTC(value);
      await tx.wait();

      alert("Swap successful!");
    } catch (error) {
      console.error(error);
      alert("Swap failed.");
    }
  };

  return (
    <div className="p-4">
      <input
        type="number"
        placeholder="Amount OCOS"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border px-4 py-2 rounded w-full mb-2"
      />
      <button onClick={handleSwap} className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Swap to BTC
      </button>
    </div>
  );
}
