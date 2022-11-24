import logo from "./logo.svg";
import "./App.css";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";
import { useEffect, useState } from "react";

import DAO1 from "./DAO1.svg";
import DAO2 from "./DAO2.svg";
import DAO3 from "./DAO3.svg";
import DAO4 from "./DAO4.svg";

import separator from "./separator.svg";
import lowerSeparator from "./lowerSeparator.svg";
import metamafia from "./metamafia.svg";
import upArrow from "./upArrow.svg";
import downArrow from "./downArrow.svg";

function App() {
  async function connect() {
    const allInjected = await web3Enable("Azero Debate");
    setWalletState(allInjected.length ? "connected" : "errored");
    if (allInjected.length) {
      const accounts = await web3Accounts();
      setAccounts(accounts);
      setActiveAddress(accounts[0].address);
    }
  }
  const [walletState, setWalletState] = useState("awaiting connection");
  const [accounts, setAccounts] = useState([]);
  const [activeAddress, setActiveAddress] = useState();

  useEffect(() => {
    console.log("Active address is now", activeAddress);
  }, [activeAddress]);

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
            <select
              className="rounded-md border-2 border-teal-400 text-white w-40 bg-transparent"
              onChange={(e) => setActiveAddress(e.target.value)}
            >
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
          <DAOCard imgSrc={DAO1} label="AZERO TEST DAO" current />
          <DAOCard imgSrc={DAO2} label="Olympus DAO" />
          <DAOCard imgSrc={DAO3} label="FRAX Finance" />
          <DAOCard imgSrc={DAO4} label="Convex Finance" />
        </div>
        <img src={separator} alt="" className="m-auto mt-4" />
        <div className="flex justify-center">
          <button className="bg-teal-300 uppercase py-2 px-4 rounded-2xl text-black font-bold">
            Create a post
          </button>
        </div>
        <div className="mx-16 gap-8 my-8 text-black flex flex-col">
          <PostCard
            authorImg={metamafia}
            authorName="MetaMafia.azero"
            daoImg={DAO1}
            daoName="AZERO TEST DAO"
            tags={[
              { color: "orange", label: "Governance" },
              { color: "red", label: "DeFi" },
              { color: "blue", label: "NFTs" },
            ]}
            time={Date.now() - 60 * 60 * 1.5}
            upvoteCount={67}
            downVoteCount={21}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <PostCard
            authorImg={metamafia}
            authorName="MetaMafia.azero"
            daoImg={DAO1}
            daoName="AZERO TEST DAO"
            tags={[
              { color: "orange", label: "Governance" },
              { color: "red", label: "DeFi" },
              { color: "blue", label: "NFTs" },
            ]}
            time={Date.now() - 60 * 60 * 1.5}
            upvoteCount={67}
            downVoteCount={21}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <PostCard
            authorImg={metamafia}
            authorName="MetaMafia.azero"
            daoImg={DAO1}
            daoName="AZERO TEST DAO"
            tags={[
              { color: "orange", label: "Governance" },
              { color: "red", label: "DeFi" },
              { color: "blue", label: "NFTs" },
            ]}
            time={Date.now() - 60 * 60 * 1.5}
            upvoteCount={67}
            downVoteCount={21}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <PostCard
            authorImg={metamafia}
            authorName="MetaMafia.azero"
            daoImg={DAO1}
            daoName="AZERO TEST DAO"
            tags={[
              { color: "orange", label: "Governance" },
              { color: "red", label: "DeFi" },
              { color: "blue", label: "NFTs" },
            ]}
            time={Date.now() - 60 * 60 * 1.5}
            upvoteCount={67}
            downVoteCount={21}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <img src={lowerSeparator} alt="" className="m-auto mt-8" />
        </div>
      </div>
    </div>
  );
}

export default App;

function DAOCard({ imgSrc, label, current }) {
  return (
    <div className="bg-gray-300 text-black flex items-center gap-2 rounded-xl p-2">
      <img src={imgSrc} alt="" />
      <div className="font-semibold">{label}</div>
      <button
        className={`bg-${
          current ? "red" : "teal"
        }-400 p-1 rounded-xl px-4 text-xs font-bold`}
      >
        {current ? "Current" : "Join Debate"}
      </button>
    </div>
  );
}

function PostCard({
  authorImg,
  authorName,
  daoImg,
  daoName,
  tags,
  time,
  upvoteCount,
  downVoteCount,
  text,
}) {
  return (
    <div className="bg-gray-400 rounded-xl flex p-4 flex-col gap-4">
      <div className="flex gap-4 items-center w-full">
        <div className="bg-gray-200 flex items-center gap-1 p-2 rounded-xl">
          <img src={authorImg} alt="" className="h-8" />
          <div>{authorName}</div>
        </div>
        <div className="bg-gray-200 flex items-center gap-1 p-2 rounded-xl">
          <img src={daoImg} alt="" className="h-8" />
          <div className="font-semibold">{daoName}</div>
        </div>
        <div className="font-bold">Tags:</div>
        {tags.map((tag) => (
          <div
            key={tag.label}
            className={`bg-${tag.color}-400 p-2 px-3 rounded-3xl font-bold`}
          >
            {tag.label}
          </div>
        ))}
        <div className="grow text-right">
          {~~(((Date.now() - time) / 60 / 60) * 2) / 2} hours ago
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col bg-gray-200 p-6 rounded-xl gap-4">
          <div className="flex flex-col text-green-500">
            <button>
              <img src={upArrow} alt="" />
            </button>
            {upvoteCount}
          </div>
          <div className="flex flex-col text-red-500">
            {downVoteCount}
            <button>
              <img src={downArrow} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-black text-white rounded-xl p-4">{text}</div>
      </div>
    </div>
  );
}
