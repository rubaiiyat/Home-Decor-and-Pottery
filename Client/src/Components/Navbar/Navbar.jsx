import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#415765] font-bold underline"
              : "text-[#415765] hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-[#415765] font-bold underline"
              : "text-[#415765] hover:underline"
          }
        >
          Shop
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/membership"
          className={({ isActive }) =>
            isActive
              ? "text-[#415765] font-bold underline"
              : "text-[#415765] hover:underline"
          }
        >
          Membership
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-item"
          className={({ isActive }) =>
            isActive
              ? "text-[#415765] font-bold underline"
              : "text-[#415765] hover:underline"
          }
        >
          Add Book
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#D9DFD7] shadow-sm md:px-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-[#415765]  text-3xl lg:text-4xl font-bold  [font-family:'Macondo',cursive]">
            Pottery
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold [font-family:'Maven Pro']">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className=" m-1  text-[#415765] hover:cursor-pointer text-2xl"
            >
              <FaUserCircle />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-[#F4F0ED] menu  rounded-box z-1  p-2 shadow-sm text-[#415765]"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Register</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
