import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "App";

export default function Header(props) {
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-50">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            className="w-24"
            src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
            alt="CGV.vn"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600 text-white"
              activeClassName="border-b-2 border-white"
            >
              Home
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
              activeClassName="border-b-2 border-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
              activeClassName="border-b-2 border-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-8 py-3 rounded"
          >
            Sign in
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
