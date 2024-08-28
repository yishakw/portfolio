import { useState } from "react";
import IMAGES from "../Images/Images";

function Portfolio() {
  const projects = [
    {
      image: "portfolio",
      title: "Portfolio site",
      link: "https://yishakwondimgezahu.vercel.app/",
    },
    {
      image: "weatherIt",
      title: "Weather web app",
      link: "https://weatherit-sky.vercel.app/",
    },
    {
      image: "abyssinia",
      title: "Landing Page",
      link: "https://abyssiniasoftwaresolutions-yishak-s-projects.vercel.app/",
    },
  ];
  return (
    <div className="bg-gray-300 pb-3 pt-20" id="portfolio">
      <h2 className="text-center py-11 text-3xl font-thin">Portfolio</h2>
      <div className="  mx-auto sm:grid sm:grid-cols-2 gap-1 sm:items-center">
        {projects.map((proj, i) => {
          return (
            <Project
              key={i}
              photo={proj.image}
              title={proj.title}
              tech={proj.tech}
              link={proj.link}
            />
          );
        })}
        {/* <Project photo="portfolio" />
        <Project photo="weatherIt" /> */}
      </div>
      <div className="service-2 my-20">
        {/* mt-[200px] */}
        <p className="m-7 text-center">Technologies in my toolbox</p>
        <div className="grid gap-y-11 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-self-center items-center mx-auto  ">
          {/* w-[1100px] */}
          {/* sm:grid-cols-4 smgrid-rows-2 */}
          <Tool name="HTML" img={IMAGES.html} />
          <Tool name="CSS" img={IMAGES.css} />
          <Tool name="JavaScript" img={IMAGES.js} />
          <Tool name="React" img={IMAGES.react} />
          <Tool name="git" img={IMAGES.git} />
          <Tool name="GitHub" img={IMAGES.github} />
          <Tool name="Tailwind" img={IMAGES.tailwind} />
          <Tool name="Vite.js" img={IMAGES.vite} />
        </div>
      </div>
    </div>
  );
}
function Project({ photo, title, tech, link }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="border-2 pb- bg-gray-500 drop-shadow-2xl sm:w-[45vw] overflow-hidden  rounded-2xl transition delay-150  hover:bg-gray-200 duration-800 m-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={link}>
        <div
          className={`absolute w-full flex flex-col justify-center items-center h-full z-10  ${
            !hovered ? "hidden" : ""
          } bg-yellow-900/80`}
        >
          <h1 className=" rounded-xl p-1 text-white hover:text-stone-900 text-2xl">
            {title}
          </h1>
          <p>{tech}</p>
        </div>
      </a>
      <img
        src={IMAGES[photo]}
        alt="project photo"
        className={`rounded-xl ${
          hovered && "scale-110"
        } transition-all hover:scale-110 `}
      />
    </div>
  );
}
function Tool({ name, img }) {
  return (
    <div className="w-[80px] md:w-[110px] lg-w[150px] transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-101 bg-amber-300/20 hover:bg-lime-200/50 rounded-3xl duration-900 mx-auto flex-col items-center justify-center">
      <p className="text-center ">{name}</p>
      <img src={img} alt="html five icon" />
    </div>
  );
}
export default Portfolio;
