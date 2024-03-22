import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
const Nav = () => {
  const [click, setClick] = useState(false);

  function handleChange() {
    setClick(!click);
  }

  const content = (
    <>
      <div className="lg:hidden block absolute top-[10vh] left-0 right-0 bg-slate-900 transition-auto max-w-[30%]">
        <ul className="text-center text-xl">
          <Link to={"/about"}>
            <li
              onClick={handleChange}
              className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded"
            >
              About
            </li>
          </Link>

          <Link to={"/contact"}>
            <li
              onClick={handleChange}
              className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded"
            >
              Contact
            </li>
          </Link>
          <Link to={"/projects"}>
            <li
              onClick={handleChange}
              className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded"
            >
              Project
            </li>
          </Link>
          <Link to={"/skills"}>
            <li
              onClick={handleChange}
              className="my-4 py-4 border-slate-800 hover:bg-slate-800 hover:rounded"
            >
              Skill
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="sticky top-0">
      <div className="h-[10vh] flex justify-between z-50 text-white bg-slate-900 lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <Link to={"/"}>
            <span className="text-3xl font-bold">Portfolio</span>
          </Link>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to={"/about"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  Contact
                </li>
              </Link>
              <Link to={"/projects"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  Project
                </li>
              </Link>
              <Link to={"/skills"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">
                  Skill
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block md:hidden transition text-xl font-bold"
          onClick={handleChange}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
