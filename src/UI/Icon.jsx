import IMAGES from "../Images/Images";

function Icon({ name, w }) {
  return (
    <div className="hover:shadow-white hover:cursor-pointer hover:-translate-y-1">
      <img src={IMAGES[name]} alt={`${name} icon`} className="w-8" />
    </div>
  );
}

export default Icon;
