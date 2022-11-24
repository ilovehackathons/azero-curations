import logo from "./logo.svg";
import "./App.css";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";
import { useState } from "react";

function App() {
  async function connect() {
    const allInjected = await web3Enable("Azero Debate");
    setWalletState(allInjected.length ? "connected" : "errored");
    if (allInjected.length) {
      setAccounts(await web3Accounts());
    }
  }
  const [walletState, setWalletState] = useState("awaiting connection");
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="p-4 flex items-center justify-between gap-2">
      <img src={logo} alt="" />
      {walletState === "awaiting connection" ? (
        <button
          className="mt-2 mr-2 rounded-3xl px-6 py-2 text-sm font-medium bg-teal-400 text-white"
          onClick={connect}
        >
          Connect Wallet
        </button>
      ) : walletState === "connected" ? (
        <div className="flex flex-col gap-2">
          <div>
            <button
              className="mt-2 mr-2 rounded-3xl px-6 py-2 text-sm font-medium bg-teal-400 text-white"
              onClick={connect}
            >
              Wallet Connected
            </button>
          </div>
          <select className="rounded-md border-2 border-teal-400 text-white w-40 bg-transparent">
            {accounts.map((account) => (
              <option key={account.address}>{account.address}</option>
            ))}
          </select>
        </div>
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
