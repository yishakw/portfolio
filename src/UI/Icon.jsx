import IMAGES from "../Images/Images";

function Icon({ name, href }) {
  return (
    <div className="hover:shadow-white hover:cursor-pointer hover:-translate-y-1">
      <a href={href}>
        <img src={IMAGES[name]} alt={`${name} icon`} className="w-8" />
      </a>
    </div>
  );
}

export default Icon;
