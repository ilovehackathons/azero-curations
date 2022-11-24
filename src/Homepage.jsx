import logo from "./logo.svg";
import "./App.css";

function Homepage() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <img src={logo} alt="" />
        <button
          className="mt-2 mr-2 rounded-3xl px-6 py-2 text-sm font-medium bg-teal-400 text-white"
          onClick={() => (window.location.pathname = "app")}
        >
          Launch App
        </button>
      </div>
    </div>
  );
}

export default Homepage;
