import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { IoBagHandleOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const links = (
    <>
      <li className=" font-inter font-semibold">
        <Link>Home</Link>
      </li>

      <li className=" font-inter font-semibold">
        <Link>About</Link>
      </li>
      <li className=" font-inter font-semibold">
        <Link>Services</Link>
      </li>
      <li className=" font-inter font-semibold">
        <Link>Blog</Link>
      </li>
      <li className=" font-inter font-semibold">
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link className="">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-6 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-4">
        <IoSearch className="text-xl" />
        <IoBagHandleOutline className="text-xl"/>
        </div>
        <a className="rounded-md ml-4 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#FF3811]  text-white">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#FF3811] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-[#FF3811] transition duration-300 group-hover:text-white ease">
            Appointment
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
