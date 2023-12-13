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
        className="bg-slate-400 flex-col justify-center items-center gap-5 h-[200px] mx-auto"
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
            <h2 className="">Call</h2>
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
            <h2>Email</h2>
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
            <h2>Find me</h2>

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
    <div className=" text-xl rounded-md hover:bg-gray-100 text-white  flex justify-evenly items-center bg-stone-600/50 m-3 p-3 mx-[60px] font-thin hover:text-purple-500">
      {children}
    </div>
  );
}
export default Contact;
