import IMAGES from "../Images/Images";

function Portfolio() {
  return (
    <div className="h-[645px] " id="portfolio">
      <h2 className="text-center py-11 text-2xl">Projects</h2>
      <div className="flex h-[400px] justify-center gap-10 items-center">
        <Project photo="portfolio" />
        <Project photo="weatherIt" />
      </div>
    </div>
  );
}
function Project({ photo }) {
  return (
    <div className="w-[500px] border-2 h-[300px] bg-gray-500 drop-shadow-2xl rounded-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 duration-800">
      <img src={IMAGES[photo]} alt="project photo" className="rounded-xl" />
    </div>
  );
}
export default Portfolio;
