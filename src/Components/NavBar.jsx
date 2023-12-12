import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBarLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-violet-800" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-violet-800" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-projects"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-violet-800" : ""
          }
        >
          My Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-me"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-violet-800" : ""
          }
        >
          About me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-me"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active text-violet-800" : ""
          }
        >
          Contact me
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-3xl">
            S M <span className="px-1 "> Ibrahim</span> Kayum
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {navBarLinks}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {navBarLinks}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
