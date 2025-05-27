# OCOS Swap Bridge – BTC-Backed DEX Integration

This repository powers the **App.ocos.io** decentralized swap interface, enabling seamless and transparent token exchange between **OCOS (BEP-20)** and **BTC** via a fully collateralized system backed by 1 billion OCOS tokens.

> **Vault Address (Off-chain BTC):** `bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2`

---

## 🚀 Key Features

- 🔁 Swap OCOS ↔ BTCB on BNB Smart Chain
- 💰 Backed by 1B OCOS token reserve
- 🧩 Connected to BTC native vault address
- 📈 Real-time price calculation using Chainlink & PancakeSwap
- 🦊 MetaMask & WalletConnect support (Web3 compatible)
- 🌍 Public, auditable, and open-source infrastructure

---

## 📁 Project Structure

app.ocos.io-swap-bridge/
├── public/ # Static public assets (favicon, html)
├── src/
│ ├── components/ # React UI components (wallet, swap)
│ ├── contracts/ # Smart contract (.sol) files
│ ├── utils/ # Web3 utils & price fetchers
│ ├── App.jsx # Main application file
│ ├── index.js # React DOM entry point
│ └── index.css # Tailwind styles
├── .env # Environment variables
├── package.json # Project metadata
└── README.md # You’re reading it now


---

## ⚙️ Technology Stack

| Technology    | Purpose                        |
|---------------|--------------------------------|
| React         | Frontend framework             |
| Ethers.js     | Blockchain interaction         |
| Solidity      | Smart contract development     |
| Tailwind CSS  | Lightweight UI styling         |
| Chainlink     | Price oracle feed              |
| PancakeSwap   | BNB DEX integration            |
| Vercel        | Hosting / deployment           |

---

## 🌐 Environment Variables

Create a `.env` file at the root and set:

```env
REACT_APP_OCOS_CONTRACT_ADDRESS=0xYourDeployedContractAddress
REACT_APP_CHAIN_ID=56
REACT_APP_ADMIN_ADDRESS=0xYourAdminWallet
