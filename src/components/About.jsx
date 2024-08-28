import IMAGES from "../Images/Images";

import "animate.css";

function About() {
  return (
    <div className="pt-5 " id="about">
      <div
        className=" justify-evenly  md:flex sm:items-center
      sm:justify-around mx-auto "
      >
        <img
          src={IMAGES.image2}
          alt="picture of Yishak"
          className="  mt-11 mx-auto sm:p-5 border-non w-[85%] sm:w-[60%]  drop-shadow-xl rounded-t-full transition ease-in-out delay-150 bg-blue-10   hover:scale-105 hover:drop-shadow-2xl duration-1000 object-contain md:w-[35vw]"
        />
        <div className=" pt-11 px-5 font-thin leading-8 text-xl font-[popins] ">
          {/* w-[700px] */}
          <p className="px-3 text-center mx-auto rounded-xl bg-transparent md:max-w-[550px] ">
            I&apos;m a passionate and dedicated frontend web developer with a
            flair for creating visually stunning and user-friendly websites. My
            journey in the world of web development began with a fascination for
            blending creativity with technology, and it&apos;s been an
            exhilarating ride ever since.
          </p>
          <p className="mt-6 mx-auto px-8 text-center rounded-xl bg-cyan-500/10  md:max-w-[550px] ">
            I specialize in crafting beautiful and responsive user interfaces
            using the latest web technologies. From conceptualization to
            execution, I thrive on turning ideas into polished, functional
            websites that leave a lasting impression.
          </p>
          <div className="ml-6 mt-6 ">
            {/* mt-[170px] mx-9 */}
            {/* <a
              href="assets/YishakW.pdf"
              className="fancy_layer"
              download="YishakW.pdf"
            >
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
