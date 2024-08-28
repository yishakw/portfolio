import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import "animate.css";
import IMAGES from "../Images/Images";
import Connect from "../UI/Connect";
import Icon from "../UI/Icon";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useState } from "react";
import Nav from "./Nav";
function Home() {
  const [showNav, setShowNav] = useState(false);
  function showNavigationHandler() {
    setShowNav((prev) => !prev);
  }
  return (
    <div className="bg-fronten  text-black  " id="">
      <Nav />

      <div className="flex justify-center bg-green-200/80 pt-[200px]">
        <div className="h-[550px] text-center  items-center justify-around flex-col center ">
          <h3 className=" text-lg text-start pl-6 navbar">Hey,</h3>

          <h1 className=" text-5xl sm:text-8xl font-name  font-thin">
            I&apos;m Yishak
          </h1>
          <h1 className="text-3xl mt-3 px-4">Front-End Web Developer</h1>
          <p className="max-w-xl mx-auto px-3 text-md">
            engaging web experiences... responsive design ...modern
            technologies.
          </p>

          <Connect>
            <Icon name="github1" href="https://github.com/yishakw" />
            <Icon
              name="linkedin"
              href="https://www.linkedin.com/in/yishak-wondimgezahu-8b4930246"
            />

            <Icon name="email" href="mailto:yishakwondimgezahu12@gmail.com" />
            <Icon name="telegram" href="https://t.me/Luck1e" />
          </Connect>
        </div>
      </div>

      <About />

      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
