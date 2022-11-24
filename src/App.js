import logo from "./logo.svg";
import "./App.css";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";
import { useState } from "react";

import DAO1 from "./DAO1.svg";
import DAO2 from "./DAO2.svg";
import DAO3 from "./DAO3.svg";
import DAO4 from "./DAO4.svg";

import separator from "./separator.svg";
import metamafia from "./metamafia.svg";

import upvote from "./upvote.svg";
import downvote from "./downvote.svg";

import upArrow from "./upArrow.svg";
import downArrow from "./downArrow.svg";

// import { ArrowSmallUpIcon } from "@heroicons/react";
// import { ArrowSmallDownIcon } from "@heroicons/react";

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
    <div className="p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
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
      <div className="p-8 pt-16">
        <h1 className="text-teal-300 text-5xl font-semibold mx-16">
          My Curations
        </h1>
        <div className="flex justify-evenly py-8">
          <div className="bg-gray-300 text-black flex items-center gap-2 rounded-xl p-2">
            <img src={DAO1} alt="" />
            <div className="font-semibold">AZERO TEST DAO</div>
            <button className="bg-red-400 p-1 rounded-xl px-4 text-xs font-bold">
              Current
            </button>
          </div>
          <div className="bg-gray-300 text-black flex items-center gap-2 rounded-xl p-2">
            <img src={DAO2} alt="" />
            <div className="font-semibold">Olympus DAO</div>
            <button className="bg-teal-400 p-1 rounded-xl px-4 text-xs font-bold">
              Join Debate
            </button>
          </div>
          <div className="bg-gray-300 text-black flex items-center gap-2 rounded-xl p-2">
            <img src={DAO3} alt="" />
            <div className="font-semibold">FRAX Finance</div>
            <button className="bg-teal-400 p-1 rounded-xl px-4 text-xs font-bold">
              Join Debate
            </button>
          </div>
          <div className="bg-gray-300 text-black flex items-center gap-2 rounded-xl p-2">
            <img src={DAO4} alt="" />
            <div className="font-semibold">Convex Finance</div>
            <button className="bg-teal-400 p-1 rounded-xl px-4 text-xs font-bold">
              Join Debate
            </button>
          </div>
        </div>
        <img src={separator} alt="" className="m-auto mt-4" />
        <div className="flex justify-center">
          <button className="bg-teal-300 uppercase py-2 px-4 rounded-2xl text-black font-bold">
            Create a post
          </button>
        </div>
        <div className="mx-16 gap-4 my-8 text-black">
          <div className="bg-gray-400 rounded-xl flex p-4 flex-col gap-4">
            <div className="flex gap-4 items-center w-full">
              <div className="bg-gray-200 flex items-center gap-1 p-2 rounded-xl">
                <img src={metamafia} alt="" className="h-8" />
                <div>MetaMafia.azero</div>
              </div>
              <div className="bg-gray-200 flex items-center gap-1 p-2 rounded-xl">
                <img src={DAO1} alt="" className="h-8" />
                <div className="font-semibold">AZERO TEST DAO</div>
              </div>
              <div className="font-bold">Tags:</div>
              <div className="bg-orange-400 p-2 px-3 rounded-3xl font-bold">
                Governance
              </div>
              <div className="bg-red-500 p-2 px-3 rounded-3xl font-bold">
                DeFi
              </div>
              <div className="bg-blue-400 p-2 px-3 rounded-3xl font-bold">
                NFTs
              </div>
              <div className="grow text-right">2 hours ago</div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex flex-col bg-gray-200 p-6 rounded-xl gap-4">
                <div className="flex flex-col text-green-500">
                  <button>
                    <img src={upArrow} alt="" />
                  </button>
                  67
                </div>
                <div className="flex flex-col text-red-500">
                  21
                  <button>
                    <img src={downArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
          </div>
          <img src={separator} alt="" className="m-auto mt-16" />
        </div>
      </div>
    </div>
  );
}

export default App;
