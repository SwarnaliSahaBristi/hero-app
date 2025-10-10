import React from "react";
import logo from "../assets/logo.png";
import buttonSign from "../assets/Vector (2).png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const handleOpenGitHub = () => {
    window.open("https://github.com/SwarnaliSahaBristi");
  };
  return (
   <div className="">
     <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl text-purple-600 font-bold">
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
          HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={handleOpenGitHub} className="btn text-white rounded-lg bg-gradient-to-l  from-[#9F62F2] to-[#632EE3]">
          <img src={buttonSign} alt="" />
          Contribute
        </button>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
