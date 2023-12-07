import IMAGES from "../Images/Images";
import Connect from "../UI/Connect";
import Icon from "../UI/Icon";
function Home() {
  return (
    <div className="bg-frontend mix-blend-color-burn text-black h-[650px] ">
      <nav className=" h-[100px]  sticky flex text-xl items-center justify-between  shadow-[0_50px_25px_5px_rgba(0,0,0,0.1)] sm:bg-gradient-to-r  py-auto  bottom-[1000px]">
        <p className="text-3xl font-logo nav_btn ml-4">YISHAK</p>
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
          <h3 className="pt-[200px] text-lg text-start pl-6 navbar">Hey,</h3>
          <h1 className=" text-4xl sm:text-8xl font-name  font-thin">
            I&apos;m Yishak
          </h1>
          <h1 className="text-3xl">I&apos;m a Front-End Web Developer</h1>
          <p className="max-w-xl m-x-auto text-lg">
            Passionate about creating engaging web experiences through
            responsive design and modern technologies.
          </p>
          {/* <div className="flex gap-9  mt-4 justify-center items-center">
            <Icon name="github1" />
            <Icon name="linkedin" />
            <Icon name="instagram" />
            <Icon name="email" />
            <Icon name="telegram" />
          </div> */}
          <Connect>
            <Icon name="github1" />
            <Icon name="linkedin" />
            <Icon name="instagram" />
            <Icon name="email" />
            <Icon name="telegram" />
          </Connect>
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
  );
}
// function Icon({ name }) {
//   return (
//     <a>
//       <div>
//         <img src={IMAGES[name]} alt={`${name} icon`} />
//       </div>
//     </a>
//   );
// }
export default Home;
