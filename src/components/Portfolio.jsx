import IMAGES from "../Images/Images";

function Portfolio() {
  return (
    <div className="bg-gray-300 pb-3" id="portfolio">
      <h2 className="text-center py-11 text-3xl font-thin">Projects</h2>
      <div className="  mx-auto sm:flex sm:justify-between sm:items-center">
        <Project photo="portfolio" />
        <Project photo="weatherIt" />
      </div>
    </div>
  );
}
function Project({ photo }) {
  return (
    <div className="border-2 pb-7 bg-gray-500 drop-shadow-2xl rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 duration-800 m-5">
      {/* w-[500px]  */}
      <img src={IMAGES[photo]} alt="project photo" className="rounded-xl" />
    </div>
  );
}
export default Portfolio;
