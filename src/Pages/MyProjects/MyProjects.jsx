import { FaArrowRight } from "react-icons/fa";

const MyProjects = () => {
  return (
    <div id="projects" className="pb-20">
      <h2 data-aos="fade-right" className="text-center text-5xl font-semibold py-10">My <span className="text-sky-300">projects</span> </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-10">
        {/* Property 1 */}
        <div data-aos="fade-up">
          <div className="h-[400px] overflow-hidden hover:overflow-scroll hover:ease-in">
            <img
              className=""
              src="https://i.ibb.co/T0GN7Jm/screencapture-internal-car-surge-sh-2023-12-12-00-19-16.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-2xl">Purchase Your Favorite Electronocs</h2>
            <h2 className="text-xl font-semibold">Project Features: </h2>
            <ul className="">
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Firebase Authentication
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                CRUD operation included
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />6 brand of electronics gadgets
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Can purchase at you will
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Click to see the{" "}
                <a
                  href="https://internal-car.surge.sh/"
                  className="text-sky-300 underline"
                >
                  Live Link
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Prooperty 2 */}
        <div data-aos="fade-down">
          <div className="h-[400px] overflow-hidden hover:overflow-scroll hover:ease-in">
            <img
              className=""
              src="https://i.ibb.co/NpyKM3K/screencapture-final-assignment-136ef-web-app-2023-12-12-00-31-29.png"
              alt=""
            />
          </div>
          
          <div>
            <h2 className="text-2xl">Real State Property Dealing</h2>
            <h2 className="text-xl font-semibold">Project Features: </h2>
            <ul className="">
              <li className="flex gap-2">
                <span className="pt-1"><FaArrowRight /></span>
                <p>3 different role such as <span className="text-sky-300">User, Agent and Admin </span>panel added</p>
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Firebase Authentication
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />CRUD operation used in the project
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                You can add properties in your wishlist
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Admin can make user a agent, manage users
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Agent can add products, deal with customers.
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Click to see the{" "}
                <a
                  href="https://final-assignment-136ef.web.app/"
                  className="text-sky-300 underline"
                >
                  Live Link
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Property 3 */}
        <div data-aos="fade-up">
          <div className="h-[400px] overflow-hidden hover:overflow-scroll hover:ease-in">
            <img
              className=""
              src="https://i.ibb.co/kGKR3Xg/screencapture-localhost-5173-2023-12-12-12-02-02.png"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-2xl">Car Doctor Servicing</h2>
            <h2 className="text-xl font-semibold">Project Features: </h2>
            <ul className="">
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Firebase Authentication
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />6 Services provided
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Can purchase any of the services
              </li>
              <li className="flex items-center gap-2">
                <FaArrowRight />
                Click to see the{" "}
                <a
                  href="https://spiritual-ray.surge.sh/"
                  className="text-sky-300 underline"
                >
                  Live Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
