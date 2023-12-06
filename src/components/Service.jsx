import IMAGES from "../Images/Images";

function Service() {
  return (
    <div className=" h-[645px] text-xl">
      <h2 className="text-center mb-8 pt-8">Service</h2>
      <div className="service-1 bg-slate-400 h-[330px]  flex-col justify-around items-center mx-auto">
        <p className="m-5">services I&apos;m providing </p>
        <div className="flex items-center justify-center gap-[60px]">
          <Serve
            img={IMAGES.code}
            h="Development"
            p=" I develop websites that are customized, user-friendly,and responsive on
        different devices."
          />
          <Serve
            img={IMAGES.maintenance}
            h="Maintenance"
            p="I provide maintenance for any type of issues that are related to
            what is vissual to the user, and give technical advices for
            website owners."
          />
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
  );
}
function Serve({ img, h, p }) {
  return (
    <div className="w-[350px] h-[300px] content-center flex-col pt-7 rounded-lg hover:cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-600">
      <img
        src={img}
        alt="symbol of code"
        className="w-[60px] mx-auto p-1 border rounded-full bg-white"
      />

      <h2 className="text-center pt-5">{h}</h2>
      <p className="font-[popins] font-thin center w-[300px] text-center mx-auto pt-6">
        {p}
      </p>
    </div>
  );
}
export default Service;
