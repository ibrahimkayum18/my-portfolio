import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


const Services = () => {
    return (
        <div id="services" className="h-screen">
        <h2 className="text-center text-4xl font-semibold" data-aos="fade-left">
          My <span className="text-sky-300">Services</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-[90%] mx-auto mt-10">
          {/* Skills 1 */}
          <div className="border-2 border-sky-300 rounded-lg p-5 " data-aos="fade-up">
            <div className="flex justify-center text-5xl text-sky-300 py-2">
              <FaReact />
            </div>
            <h2 className="text-center text-2xl py-3 border-b-2 border-sky-300">
              Front-End Development with{" "}
              <span className="text-sky-300">React.js</span>
            </h2>
            <ul className="mt-3">
              <li>
                I use React.js to build the user interface of the web
                application. They create reusable components, manage the
                application's state, and implement a responsive and interactive
                user interface.
              </li>
              <li>
                Ensuring a positive and seamless user experience by optimizing
                the usability, accessibility, and overall interaction with the
                website.
              </li>
            </ul>
          </div>
          {/* Skills 2 */}
          <div className="border-2 border-sky-300 rounded-lg p-5 " data-aos="fade-down">
            <div className="flex justify-center text-5xl text-sky-300 py-2">
              <SiMongodb />
            </div>
            <h2 className="text-center text-2xl py-3 border-b-2 border-sky-300">
              Database Management with{" "}
              <span className="text-sky-300">MongoDB</span>
            </h2>
            <ul className="mt-3">
              <li>
                I mainly work with MongoDB, a NoSQL database, to manage and
                organize data. I design database schemas, perform CRUD (Create,
                Read, Update, Delete) operations, and ensure data consistency
                and integrity.
              </li>
            </ul>
          </div>
          {/* Skills 3 */}
          <div className="border-2 border-sky-300 rounded-lg p-5 " data-aos="fade-up">
            <div className="flex justify-center text-5xl text-sky-300 py-2">
              <FaNodeJs />
            </div>
            <h2 className="text-center text-2xl py-3 border-b-2 border-sky-300">
              Server-Side Development with{" "}
              <span className="text-sky-300" >Node.js and Express.js</span>
            </h2>
            <ul className="mt-3">
              <li>
                I use Node.js as the server-side runtime environment and
                Express.js as the web application framework. They handle
                server-side logic, API development, and route management to
                establish communication between the client and the database.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Services;