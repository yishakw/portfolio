import IMAGES from "../Images/Images";

import "animate.css";

function About() {
  return (
    <div className="pt-11 " id="about">
      {/* h-[645px] */}
      <h2 className="text-center text-3xl font-thin mb-3	">About</h2>
      <div className="flex-col justify-evenly  sm:flex sm:justify-around sm:w-full px-3">
        <img
          src={IMAGES.image2}
          alt="picture of Yishak"
          className="  mt-11 p-6 border-none drop-shadow-2xl rounded-full transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-200 duration-1000 animate_animated animate__zoomIn object-contain"
        />
        <div className=" pt-11 font-thin leading-8 text-xl font-[popins]">
          {/* w-[700px] */}
          <p className="px-8 text-center w-screen bg-cyan-500/10">
            I&apos;m a passionate and dedicated frontend web developer with a
            flair for creating visually stunning and user-friendly websites. My
            journey in the world of web development began with a fascination for
            blending creativity with technology, and it&apos;s been an
            exhilarating ride ever since.
          </p>
          <p className="mt-6 px-8 text-center bg-cyan-500/10 w-screen">
            I specialize in crafting beautiful and responsive user interfaces
            using the latest web technologies. From conceptualization to
            execution, I thrive on turning ideas into polished, functional
            websites that leave a lasting impression.
          </p>
          <div className="ml-6 mt-6 ">
            {/* mt-[170px] mx-9 */}
            <a href="#" className="fancy_layer">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <img />
    </div>
  );
}
export default About;
