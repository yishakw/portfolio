import { HashLink as Link } from "react-router-hash-link";
import Connect from "../UI/Connect";
import Icon from "../UI/Icon";
import IMAGES from "../Images/Images";
import { useState } from "react";

function Contact() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className=" bg-slate-400 flex-col " id="contact">
      <h1 className=" text-3xl font-thin text-center py-10 ">Contact</h1>
      <div
        className="bg-slate-400  h-[200px] mx-auto  lg:flex lg:justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* w-[1050px],gap-[100px] */}
        <Box>
          <Icon name="call" />
          <div
            className={`${
              !hovered && "hidden"
            } flex items-center justify-between gap-11`}
          >
            <a href="tel:+251901052362">+251901052362</a>
          </div>
        </Box>
        <Box>
          <Icon name="email" />
          <div
            className={`${
              !hovered && "hidden"
            } flex items-center justify-between gap-11`}
          >
            <a href="mailto:yishakwondimgezahu12@gmail.com">
              yishakwondimgezahu12
            </a>
          </div>
        </Box>
        <Box>
          <Icon name="location" />

          <div
            className={`${
              !hovered && "hidden"
            } flex items-center justify-evenly gap-11`}
          >
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </Box>
      </div>
      <div className="my-11">
        <h2 className="text-center mt-11 text-2xl">Lets Connect</h2>
        <Connect>
          <Icon name="linkedin" />
          <Icon name="instagram" />
          <Icon name="telegram" />
        </Connect>
      </div>
      <div className="flex justify-between items-center px-7 mt-[100px] border-t ">
        <Link to="/#" smooth>
          <p className="text-3xl font-logo nav_btn ml-4">YISHAK</p>
        </Link>
        <Link to="/#" smooth>
          <Icon name="back" />
        </Link>
      </div>
    </div>
  );
}
function Box({ children }) {
  return (
    <div className=" text-xl rounded-md hover:bg-gray-100 text-white  flex justify-evenly hover:justify-start hover:gap-5 items-center bg-stone-600/50 m-3 p-3 mx-[60px] font-thin lg:w-[25vw] hover:text-purple-500">
      {children}
    </div>
  );
}
export default Contact;
