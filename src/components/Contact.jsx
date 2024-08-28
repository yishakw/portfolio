import { HashLink as Link } from "react-router-hash-link";
import Connect from "../UI/Connect";
import Icon from "../UI/Icon";
import IMAGES from "../Images/Images";
import { useState } from "react";

function Contact() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className=" bg-slate-400 flex-col " id="contact">
      <div className="py-11">
        <h2 className="text-center  text-2xl">Lets Connect</h2>
        <Connect>
          <Icon
            name="linkedin"
            href="https://www.linkedin.com/in/yishak-wondimgezahu-8b4930246"
          />
          <Icon
            name="instagram"
            href="https://www.instagram.com/wondimgezahu/"
          />
          <Icon name="telegram" href="mailto:yishakwondimgezahu12@gmail.com" />
        </Connect>
      </div>
      <div className="flex justify-between items-center px-7 pb-5 border-t "></div>
    </div>
  );
}

export default Contact;
