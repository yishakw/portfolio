import { useEffect } from "react";
import Icon from "../UI/Icon";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import IMAGES from "../Images/Images";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  //   const prev_scr = useRef(0);
  const handleScroll = () => {
    const sck = window.scrollY;
    if (sck > 200) {
      setScrolled(true);
      //   console.log(scrolled);
    } else {
      setScrolled(false);
    }
    // prev_scr.current = sck;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed flex  py-7 sm:py-10 transition-all justify-between items-center gap-6 ${
        scrolled && "bg-amber-950/10 shadow-lg backdrop-blur-md"
      }  h-fit top-0 left-0 right-0  bottom-0 z-10`}
    >
      <div className="ml-6">
        <Link to="/#" smooth="true">
          <p className="text-4xl font-thin font-logo hover:scale-105 active:scale-95 transition-all ease-in-out duration-200 ml-4 ">
            Y
          </p>
        </Link>
      </div>
      <div className="flex justify-evenly w-[40vw]  items-center">
        <IconNav name="home" href="/#" scale={"scale-150"} hid={true} />

        <IconNav name="projects" href="/#portfolio" scale={"scale-90"} />
        {/* <IconNav name="call" href="https://t.me/Luck1e" /> */}
      </div>
    </nav>
  );
}

function IconNav({ name, href, scale, hid }) {
  return (
    <div
      className={` transition-all ${
        hid ? "hidden sm:[display:initial]" : ""
      } hover:drop-shadow-xl hover:contrast-200 hover:shadow-amber-700 hover:saturate-0 hover:cursor-pointer w-[60px] hover:-translate-y-1`}
    >
      <a href={href}>
        <img src={IMAGES[name]} alt={`${name} icon`} className={scale} />
      </a>
    </div>
  );
}

export default Nav;
