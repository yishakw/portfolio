import IMAGES from "../Images/Images";

function About() {
  return (
    <div className="pt-11 h-[645px]" id="about">
      <h2 className="text-center text-xl mb-5 ">About</h2>
      <div className="flex justify-evenly">
        <img
          src={IMAGES.image2}
          alt="picture of Yishak"
          className="w-[450px] h-full mt-11 ml-7 border-none drop-shadow-2xl rounded-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-1000"
        />
        <div className="w-[700px] pt-11 font-thin leading-8 text-xl font-[popins]">
          <p className="px-8 w-[700px]">
            I&apos;m a passionate and dedicated frontend web developer with a
            flair for creating visually stunning and user-friendly websites. My
            journey in the world of web development began with a fascination for
            blending creativity with technology, and it&apos;s been an
            exhilarating ride ever since.
          </p>
          <p className="px-8 pt-8 w-[700px]">
            I specialize in crafting beautiful and responsive user interfaces
            using the latest web technologies. From conceptualization to
            execution, I thrive on turning ideas into polished, functional
            websites that leave a lasting impression.
          </p>
          <div className="mt-[170px] mx-9">
            <a href="#">download cv</a>
          </div>
        </div>
      </div>

      <img />
    </div>
  );
}
export default About;
