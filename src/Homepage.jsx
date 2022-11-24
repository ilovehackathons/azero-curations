import logo from "./logo.svg";
import "./App.css";

import leftSpirals from "./leftSpirals.svg";
import rightSpirals from "./rightSpirals.svg";
import separator from "./separator.svg";

function Homepage() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <img src={logo} alt="" className="hover:animate-spin" />
        <button
          className="mt-2 mr-2 rounded-3xl px-6 py-2 text-sm font-medium bg-teal-500 text-white hover:animate-ping"
          onClick={() => (window.location.pathname = "app")}
        >
          Launch App
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={leftSpirals}
          alt=""
          className="animate-pulse hover:animate-ping"
        />
        <div className="text-center text-teal-300 flex flex-col gap-4">
          <h1 className="text-8xl hover:animate-bounce">
            Fully anonymus Content Curation
          </h1>
          <p className="text-4xl">
            creating a healthy enviroment for DAO Governance & User Reputation
          </p>
          <p className="text-sm">
            With AZERO CURATIONS, DAO Members can post Content and curate it by
            voting it Up or Down on a Leaderboard
          </p>
          <p className="text-sm">
            Votes are anonymus trough using LIMINAL by ALEPH ZERO, a combination
            of ZK-SNARKs and Secure Multiparty Computation (sMPC)
          </p>
        </div>
        <img
          src={rightSpirals}
          alt=""
          className="animate-pulse hover:animate-ping"
        />
      </div>
      <div className="flex gap-4 justify-center">
        <button className="bg-teal-400 text-black text-4xl uppercase px-16 py-4 rounded-xl">
          Join
        </button>
        <button className="bg-teal-400 text-black text-4xl uppercase px-16 py-4 rounded-xl">
          Create
        </button>
      </div>
      <div className="text-center  text-teal-400 text-4xl uppercase">
        CURATIONS
      </div>
      <div className="px-16 flex flex-col items-center">
        <img src={separator} alt="" className="py-16" />
        <h2 className="text-teal-400 text-3xl">Benefits</h2>
        <div className="flex gap-32 px-32 py-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold pb-4">For DAOs:</h3>
            <ul className="list-disc">
              <li>Get the Communities honest opinion on sensetive Topics</li>
              <li>
                Understand your Community better by seeing what they vote on and
                what they care about
              </li>
              <li>Make more valid Decisions on tangible Metrics</li>
              <li>
                Have a pre-filter for indicating outcomes of Governance
                Proposals
              </li>
              <li>
                Your Community has a direct incetive in creating High QualityDAO
                Contibutions
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold pb-4">For Members:</h3>
            <ul className="list-disc">
              <li>
                Share your honest Opinion on sensetive Topics, without fearing
                judgement of other DAO Members
              </li>
              <li>
                Be a active part in improving the Quality of DAO Contribtiuons
                by curating them
              </li>
              <li>
                Gain Reputation and Prestige among other DAO Members by crafting
                High Quality Contributions
              </li>
              <li>
                A Validation Stage for Governance Proposals in the making: Get a
                sence how your Proposal will perform based on Up- and Down-Votes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
