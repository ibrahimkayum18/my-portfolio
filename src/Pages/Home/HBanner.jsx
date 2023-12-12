import { IoMdDownload } from "react-icons/io";
import "./HBanner.css";

const HBanner = () => {
  return (
    <div className="h-screen flex justify-around items-center bg-slate-950 text-white">
      <div className="w-1/2 space-y-3" data-aos="fade-up">
        <h2 className="text-2xl font-bold">Hi There!</h2>
        <h1 className="text-4xl font-bold">I Am S M Ibrahim Kayum</h1>
        <h3 className="text-3xl font-semibold">Front-end Developer (MERN)</h3>
        <p>I'm a MERN stack front-end developer specializing in React.js, MongoDB, Express.js, and Node.js. With a keen eye for user-centric design and expertise in crafting responsive interfaces, I contribute to the seamless integration of front-end and back-end technologies for optimal web application experiences.</p>
        <div>
            <button className="py-4 px-6 bg-sky-500 flex items-center "><span className="mr-2">Download CV </span><IoMdDownload/></button>
        </div>
      </div>
      <div className="avatar" data-aos="fade-down">
        <div className="mask mask-hexagon">
          <img src="https://i.ibb.co/9w7HLF9/1702063616077-removebg-preview-1.png" />
        </div>
      </div>
    </div>
  );
};

export default HBanner;
