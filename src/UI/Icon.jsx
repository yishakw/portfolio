import IMAGES from "../Images/Images";

function Icon({ name }) {
  return (
    <a>
      <div>
        <img src={IMAGES[name]} alt={`${name} icon`} />
      </div>
    </a>
  );
}

export default Icon;
