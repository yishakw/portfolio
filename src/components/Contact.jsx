import { Link } from "react-router-dom";
import Connect from "../UI/Connect";
import Icon from "../UI/Icon";

function Contact() {
  return (
    <div className="h-[645px] bg-slate-400 flex-col " id="contact">
      <h1 className="text-center py-10 text-2xl">Contact</h1>
      <div className="bg-slate-400 flex justify-center items-center gap-[100px] h-[200px] w-[1050px] mx-auto">
        <Box>
          <div>
            <h2 className="">Call</h2>
            <a href="tel:+251901052362">+251901052362</a>
          </div>
        </Box>
        <Box>
          <Icon name="email" />
          <div>
            <h2>Email</h2>
            <a href="mailto:yishakwondimgezahu12@gmail.com">
              yishakwondimgezahu12
            </a>
          </div>
        </Box>
        <Box>
          <svg
            className="w-6 h-6 text-gray-800   "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 21"
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
            </g>
          </svg>
          <div>
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
        <p className="text-3xl font-logo nav_btn ml-4">YISHAK</p>
        <Link to="/#" smooth>
          <Icon name="back" />
        </Link>
      </div>
    </div>
  );
}
function Box({ children }) {
  return (
    <div className=" text-2xl text-white font-thin flex justify-center items-center">
      {children}
    </div>
  );
}
export default Contact;
