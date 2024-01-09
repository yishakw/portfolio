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
function Home() {
  const [showNav, setShowNav] = useState(false);
  function showNavigationHandler() {
    setShowNav((prev) => !prev);
  }
  return (
    <div className="bg-frontend  text-black h-[650px] " id="">
      <nav
        className={`flex text-xl items-center justify-between  shadow-[0_50px_25px_5px_rgba(0,0,0,0.1)] ${
          !showNav && "hover:h-[100px]"
        } pr-5 fixed w-full bg-orange-200/70 z-10 sm:h-[50px] sm:hover:h-[100px] sm:transition-all animate_animated animate__bounceInDown `}
      >
        <div className="sm:flex sm:justify-between sm:items-center md:flex md:justify-between w-full">
          <div className="flex items-center w-[90vw] sm:w-fit md:w-fit justify-between">
            <div>
              <Link to="/#" smooth>
                <p className="text-3xl font-logo nav_btn ml-4 ">YISHAK</p>
              </Link>
            </div>

            <div
              className="md:hidden sm:hidden pr-3 hover:cursor-pointer"
              onClick={showNavigationHandler}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-end sm:justify-normal sm:w-fit md:justify-center">
            <ul
              className={`list-none   ${
                showNav ? "" : "hidden"
              } sm:space-x-2 text-end sm:flex md:space-x-5`}
            >
              {/* <li className="nav_btn">Home</li>
          <li className="nav_btn">About</li>
          <li className="nav_btn">Services</li>
          <li className="nav_btn">Portfolio</li>
        <li className="nav_btn">contact</li> */}
              <Link to="/#" smooth>
                <li className="nav_btn">Home</li>
              </Link>
              <Link to="/#about" smooth>
                <li className="nav_btn">About</li>
              </Link>
              <Link to="/#service" smooth>
                <li className="nav_btn">Service</li>
              </Link>
              <Link to="/#portfolio" smooth>
                <li className="nav_btn">Portfolio</li>
              </Link>
              <Link to="/#contact" smooth>
                <li className="nav_btn">contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex justify-center bg-green-200/80 pt-[130px]">
        <div className="h-[550px] text-center  items-center justify-around flex-col center ">
          {/* pr-[100px] */}
          <h3 className=" text-lg text-start pl-6 navbar">Hey,</h3>
          {/* pt-[200px] */}
          <h1 className=" text-5xl sm:text-8xl font-name  font-thin animate_animated animate-pulse">
            I&apos;m Yishak
          </h1>
          <h1 className="text-3xl px-4">I&apos;m a Front-End Web Developer</h1>
          <p className="max-w-xl mx-auto px-3 text-lg">
            Passionate about creating engaging web experiences through
            responsive design and modern technologies.
          </p>
          {/* <div className="flex gap-9  mt-4 justify-center items-center">
            <Icon name="github1" />
            <Icon name="linkedin" />
            <Icon name="instagram" />
            <Icon name="email" />
            <Icon name="telegram" />
          </div> */}
          <Connect>
            <Icon name="github1" href="https://github.com/yishakw" />
            <Icon
              name="linkedin"
              href="https://www.linkedin.com/in/yishak-wondimgezahu-8b4930246"
            />
            <Icon
              name="instagram"
              href="https://www.instagram.com/wondimgezahu/"
            />
            <Icon name="email" href="mailto:yishakwondimgezahu12@gmail.com" />
            <Icon name="telegram" href="https://t.me/Luck1e" />
          </Connect>
        </div>
      </div>
      {/* <div className="">
          <img
        src={IMAGES.image3}
        alt="yishak's photo"
        className="w-[400px] "
      />
          <img
          src={IMAGES.frontend}
          alt="frontend development symbol"
          className="w-[550px] opacity-60 shadow-inner shadow-white mix-blend-color-burn mt-[200px]"
        />
        </div> */}

      <About />

      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}
// function Icon({ name }) {
//   return (
//     <a>
//       <div>
//         <img src={IMAGES[name]} alt={`${name} icon`} />
//       </div>
//     </a>
//   );
// }
export default Home;
