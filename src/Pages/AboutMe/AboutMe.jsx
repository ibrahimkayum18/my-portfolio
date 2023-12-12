import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiMongodb } from "react-icons/si";

const AboutMe = () => {
  return (
    <div id="about-me" className="h-screen">
      <h2 className="text-center text-5xl mt-10 font-semibold">
        <span className="text-sky-300">About</span> me
      </h2>
      <div className="lg:flex justify-center items-center gap-6 w-3/4 mx-auto">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/9w7HLF9/1702063616077-removebg-preview-1.png"
            alt=""
          />
        </div>
        <div className="w-1/2 space-y-5">
          <h2 className="text-4xl font-semibold">I am <span className="text-sky-300">S M Ibrahim Kayum</span></h2>
          <h2 className="text-3xl">MERN stack developer</h2>
          <div role="tablist" className="tabs tabs-lifted text-black">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-xl font-bold p-5"
              aria-label="Education"
            /><div
              role="tabpanel"
              className="tab-content bg-zinc-600 text-white h-60 border-base-300 rounded-box p-6"
            >
                <img className="w-3/4" src="https://i.ibb.co/qFWp45Z/rsz-logo-png.webp" alt="" />
              <h2 className="text-2xl font-semibold">Green University of Bangladesh</h2>
              <h2 className="text-xl">Department: Computer Science and Engineering</h2>
              <p>4th year</p>
            </div>
            

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-xl font-bold  p-5"
              aria-label="Skills"
              checked
            />
            <div
              role="tabpanel"
              className="tab-content bg-zinc-600 text-white border-base-300 h-60 rounded-box p-6"
            >
              <ul className="font-bold text-xl">
                <li className="flex items-center gap-2"><FaHtml5 />HTML5</li>
                <li className="flex items-center gap-2"><FaCss3Alt />CSS3</li>
                <li className="flex items-center gap-2"><TbBrandJavascript />JavaScript</li>
                <li className="flex items-center gap-2"><FaReact />React</li>
                <li className="flex items-center gap-2"><FaNodeJs />Node Js</li>
                <li className="flex items-center gap-2"><SiExpress />Express Js</li>
                <li className="flex items-center gap-2"><SiMongodb />MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
