import Connect from "../UI/Connect";
import Icon from "../UI/Icon";

function Contact() {
  return (
    <div className="h-[645px] bg-slate-400 flex-col">
      <h1 className="text-center py-10 text-2xl">Contact</h1>
      <div className="bg-black flex justify-center items-center gap-[100px] h-[200px] w-[1050px] mx-auto">
        <Box>
          <h2 className="">Call</h2>
          <a href="tel:+251901052362">+251901052362</a>
        </Box>
        <Box>
          <h2>Email</h2>
          <a href="mailto:yishakwondimgezahu12@gmail.com">
            yishakwondimgezahu12
          </a>
        </Box>
        <Box>
          <h2>Find me</h2>
          <p>Addis Ababa, Ethiopia</p>
        </Box>
      </div>
      <div>
        <h2 className="text-center">Lets Connect</h2>
        <Connect>
          <Icon name="linkedin" />
          <Icon name="instagram" />
          <Icon name="telegram" />
        </Connect>
      </div>
      <div>
        <p className="text-3xl font-logo nav_btn ml-4">YISHAK</p>
      </div>
    </div>
  );
}
function Box({ children }) {
  return <div className=" text-2xl text-white font-thin">{children}</div>;
}
export default Contact;
