import logo from "./logo.svg";
import "./App.css";
import { web3Enable } from "@polkadot/extension-dapp";
import { useState } from "react";

function App() {
  async function connect() {
    const allInjected = await web3Enable("Azero Debate");
    setWalletState(allInjected.length ? "connected" : "errored");
  }
  const [walletState, setWalletState] = useState("awaiting connection");
  return (
    <div className="p-4 flex items-center justify-between">
      <img src={logo} alt="" />
      {walletState === "awaiting connection" ? (
        <button
          className="mt-2 mr-2 rounded-3xl px-6 py-2 text-sm font-medium bg-teal-400 text-white"
          onClick={connect}
        >
          Connect Wallet
        </button>
      ) : walletState === "connected" ? (
        <button
          className="mt-2 mr-2 rounded-3xl px-6 py-2 text-sm font-medium bg-teal-400 text-white"
          onClick={connect}
        >
          Wallet Connected
        </button>
      ) : (
        <button
          className="mt-2 mr-2 rounded-3xl px-6 py-2 text-sm font-medium bg-red-400 text-white"
          onClick={connect}
        >
          Wallet Error
        </button>
      )}
    </div>
  );
}

export default App;
