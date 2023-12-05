// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";
import IMAGES from "./Images/Images";

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
  useEffect(function () {
    const navbar = document.querySelector(".navbar");
    let scroll = navbar.getBoundingClientRect().top;
    const scrollThreshold = 50;
    const win = window.scrollY;
    console.log(scroll, win);
  }, []);
  return (
    <>
      <div className="font-mono font-semibold bg-beige text-gray-700  ">
        <div className="bg-frontend mix-blend-color-burn text-black h-[650px] ">
          <nav className=" h-[100px]   flex text-xl items-center justify-between  shadow-[0_50px_25px_5px_rgba(0,0,0,0.1)] sm:bg-gradient-to-r  py-auto sticky bottom-[1000px]">
            <p className="text-3xl font-logo ">YISHAK</p>
            <ul className="list-none  space-x-7 hidden sm:flex">
              <li className="nav_btn">Home</li>
              <li className="nav_btn">About</li>
              {/* <li>About</li> */}
              <li className="nav_btn">Services</li>
              <li className="nav_btn">Portfolio</li>
              <li className="nav_btn">contact</li>
            </ul>
            <div className="sm:hidden">
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
          </nav>

          <div className="flex justify-center ">
            <div className="h-[800px] text-center  items-center justify-around flex-col center pr-[100px]">
              <h3 className="pt-[200px]  navbar">Hey,</h3>
              <h1 className=" text-4xl sm:text-7xl font-name font-thi">
                I&apos;m Yishak
              </h1>
              <h1 className="text-2xl">I&apos;m a Front-End Web Developer</h1>
              <p className="max-w-xl m-x-auto">
                Passionate about creating engaging web experiences through
                responsive design and modern technologies.
              </p>
              <div className="flex gap-9  mt-4 justify-center">
                <a>
                  <div>
                    <img src={IMAGES.github1} alt="github icon" />
                  </div>
                </a>
                <a>
                  <div>
                    <img src={IMAGES.linkedin} alt="linkedin icon" />
                  </div>
                </a>
                <a>
                  <div>
                    <img src={IMAGES.instagram} alt="instagram icon" />
                  </div>
                </a>
                <a>
                  <div>
                    <img src={IMAGES.email} alt="email icon" />
                  </div>
                </a>
                <a>
                  <div>
                    <img src={IMAGES.telegram} alt="telegram icon" />
                  </div>
                </a>
              </div>
            </div>
            <div className="">
              {/* <img
              src={IMAGES.image3}
              alt="yishak's photo"
              className="w-[400px] "
            /> */}
              {/* <img
                src={IMAGES.frontend}
                alt="frontend development symbol"
                className="w-[550px] opacity-60 shadow-inner shadow-white mix-blend-color-burn mt-[200px]"
              /> */}
            </div>
          </div>
        </div>

        <div className="pt-10 h-[645px]">
          <h2 className="text-center text-xl mb-5 ">About Me</h2>
          <div className="flex justify-evenly">
            <img
              src={IMAGES.image2}
              alt="picture of Yishak"
              className="w-[450px] h-full mt-11 border-none drop-shadow-2xl rounded-2xl "
            />
            <div className="w-[50vw] pt-11 font-sans leading-8 text-xl">
              <p className="p-8 w-[600px]">
                I&apos;m a passionate and dedicated frontend web developer with
                a flair for creating visually stunning and user-friendly
                websites. My journey in the world of web development began with
                a fascination for blending creativity with technology, and
                it&apos;s been an exhilarating ride ever since.
              </p>
              <p className="p-8 w-[600px]">
                I specialize in crafting beautiful and responsive user
                interfaces using the latest web technologies. From
                conceptualization to execution, I thrive on turning ideas into
                polished, functional websites that leave a lasting impression.
              </p>
            </div>
          </div>

          <img />
        </div>

        <div className=" h-[645px] bg-slate-500 text-xl">
          <h2 className="text-center mb-8 pt-8">Service</h2>
          <div className="service-1 bg-slate-400 h-[330px] pt-11 flex-col justify-around items-center mx-auto">
            <p className="m-5">The services I&apos;m providing are</p>
            <div className="flex items-center justify-center gap-[60px]">
              <div className="w-[500px] h-[200px] bg-violet-400 ">
                <img
                  src={IMAGES.code}
                  alt="symbol of code"
                  className="w-[60px] mx-auto p-1 border rounded-full bg-white"
                />

                <h2 className="text-center">Development</h2>
                <p>
                  I develop websites that are customized, user-friendly,and
                  responsive on different devices.
                </p>
              </div>
              <div className="w-[500px] h-[200px] bg-violet-400">
                <span>
                  <img
                    src={IMAGES.maintenance}
                    alt="maintenance icon"
                    className="w-[60px] mx-auto p-1 border rounded-full bg-white"
                  />
                  <h2 className="text-center">Maintenance</h2>
                  <p className="">
                    I provide maintenance for any type of issues that are
                    related to what is vissual to the user, and give technical
                    advices for website owners.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="service-2">
            <p className="m-5">Technologies in my toolbox are</p>
            <div className="grid gap-2 grid-cols-4 grid-rows-2 justify-self-center items-center w-[800px] mx-auto">
              <div className="w-[80px]">
                <p>Html</p>
                <img src={IMAGES.html} alt="html five icon" />
              </div>
              <div className="w-[80px]">
                <p>Css</p>
                <img src={IMAGES.css} alt="css icon" />
              </div>
              <div className="w-[80px]">
                <p>JavaScript</p>
                <img src={IMAGES.js} alt="javascript icon" />
              </div>
              <div className="w-[80px]">
                <p>React</p>
                <img src={IMAGES.react} alt="react icon" />
              </div>
              <div className="w-[80px]">
                <p>git</p>
                <img src={IMAGES.git} alt="git icon" />
              </div>
              <div className="w-[80px]">
                <p>github</p>
                <img src={IMAGES.github} alt="github icon" />
              </div>
              <div className="w-[80px]">
                <p>Tailwind</p>
                <img src={IMAGES.tailwind} alt="tailwind icon" />
              </div>
              <div>
                <p>vite.js</p>
                <img src={IMAGES.vite} alt="vite icon" />
              </div>
            </div>
          </div>
        </div>
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
