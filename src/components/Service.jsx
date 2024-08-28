import IMAGES from "../Images/Images";

function Service() {
  return (
    <div className="  text-xl " id="service">
      {/* h-[1000px] */}
      <div className=" bg-slate-200 flex-col justify-around items-center mx-auto py-20">
        <h2 className="text-center mb-8 pt-11 text-3xl font-thin">I Do</h2>
        {/* w-[500px], h-[330px] */}
        {/* <p className="m-5">services I&apos;m providing </p> */}
        <p className="m-5 text-center"></p>
        <div className="px-6 pb-2 sm:flex sm:items-center sm:justify-around sm:gap-3 md:flex md:items-center md:justify-around ">
          {/* gap-[160px] */}
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
    </div>
  );
}
function Serve({ img, h, p }) {
  return (
    <div className=" h-[300px]   pt-7  rounded-3xl hover:cursor-pointer transition ease-in-out delay-150 bg-blue-200 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-100 duration-600 max-w-sm  mx-auto  my-4">
      {/* w-[750px]  h-[400px] */}
      <img
        src={img}
        alt="symbol of code"
        className="w-[60px] mx-auto p-1 border rounded-full bg-white"
      />

      <h2 className="text-center pt-5">{h}</h2>
      <p className="font-[popins] font-thin text-center mx-auto pt-6">{p}</p>
    </div>
  );
}


export default Service;
