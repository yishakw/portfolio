// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";
import IMAGES from "./Images/Images";

function App() {
  // const [count, setCount] = useState(0);
  useEffect(function () {
    async function weatherCall() {
      const resp = await fetch(
        "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=oW1rV0cqi8lZe1Uk6kQ5s1Qp1necwrGA"
      );
      const data = await resp.json();
      console.log(data);
    }
    weatherCall();
  }, []);
  return (
    <>
      <div className="font-mono font-semibold  bg-beige text-gray-700">
        <nav className="h-16 bg-indigo-300 flex items-center justify-between p-7 shadow-lg shadow-yellow-600/40">
          <p>logo</p>
          <ul className="list-none flex space-x-11 ">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>contact</li>
          </ul>
        </nav>
        <div className="flex justify-evenly">
          <div className="h-[88vh] text-center justify-center items-center  flex-col center ">
            <h1 className="text-4xl pt-[280px] ">Hey, I&apos;m Yishak</h1>
            <h1 className="text-2xl">I&apos;m a Front-End Web Developer</h1>
            <p className="max-w-xl m-x-auto">
              Passionate about creating engaging web experiences through
              responsive design and modern technologies.
            </p>
            <div className="flex gap-9  mt-4 justify-center">
              <a>
                <div>
                  <img src={IMAGES.github} alt="github icon" />
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
          <div></div>
        </div>

        <div className="pt-10">
          <h2 className="text-center text-xl mb-5">About Me</h2>
          <div className="flex justify-evenly">
            <div className="w-[50vw] pt-11">
              <p>
                I&apos;m a passionate and dedicated frontend web developer with
                a flair for creating visually stunning and user-friendly
                websites. My journey in the world of web development began with
                a fascination for blending creativity with technology, and
                it&apos;s been an exhilarating ride ever since.
              </p>
              <p>
                I specialize in crafting beautiful and responsive user
                interfaces using the latest web technologies. From
                conceptualization to execution, I thrive on turning ideas into
                polished, functional websites that leave a lasting impression.
              </p>
            </div>
            <img
              src={IMAGES.image2}
              alt="picture of Yishak"
              className="w-[450px] h-full mt-11 border-none drop-shadow-2xl rounded-2xl "
            />
          </div>
          <h4>My Expertise</h4>

          <img />
        </div>
        <div className="services"></div>
        <div className="portfolio"></div>
        <div className="contact"></div>
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
