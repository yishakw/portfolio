// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";
import IMAGES from "./Images/Images";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
function App() {
  // const [count, setCount] = useState(0);
  // useEffect(function () {
  //   async function weatherCall() {
  //     const resp = await fetch(
  //       "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=oW1rV0cqi8lZe1Uk6kQ5s1Qp1necwrGA"
  //     );
  //     const data = await resp.json();
  //     console.log(data);
  //   }
  //   weatherCall();
  // }, []);
  // useEffect(function () {
  //   const navbar = document.querySelector(".navbar");
  //   let scroll = navbar.getBoundingClientRect().top;
  //   const scrollThreshold = 50;
  //   const win = window.scrollY;
  //   console.log(scroll, win);
  // }, []);
  return (
    <>
      <div className="font-mono font-semibold bg-beige text-gray-700  ">
        <Home />

        <About />

        <Service />
      </div>
    </>
  );
}

export default App;
{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
