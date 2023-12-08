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
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // function NavBar() {
  //   return (
  //     <ul className="flex gap-9">
  //       <NavLink to="/">
  //         <li>Home</li>
  //       </NavLink>
  //       <NavLink to="/about">
  //         <li>About</li>
  //       </NavLink>
  //       <NavLink to="/contact">
  //         <li>Contact</li>
  //       </NavLink>
  //       <NavLink to="/portfolio">
  //         <li>Portfolio</li>
  //       </NavLink>
  //     </ul>
  //   );
  // }
  // function TestHome() {
  //   return <div>home</div>;
  // }
  // function TestAbout() {
  //   return <div>About</div>;
  // }
  // function TestContact() {
  //   return <div>Contact</div>;
  // }
  // function TestPortfolio() {
  //   return <div>Portfolio</div>;
  // }
  return (
    <div className="font-mono font-semibold bg-beige text-gray-700  ">
      <Home />
    </div>
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
