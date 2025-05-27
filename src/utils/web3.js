import { ethers } from "ethers";

export function getProvider() {
  if (window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  } else {
    throw new Error("No Web3 wallet detected");
  }
}
