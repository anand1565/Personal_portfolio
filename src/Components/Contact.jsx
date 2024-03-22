import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-[90vh] w-[100%]">
      <div className="flex flex-col items-start justify-center lg:text-[7vw] max-md:text-[10vw] pt-4 px-5 font-semibold tracking-wider">
        <h1>LET'S</h1>
        <h1>WORK</h1>
        <h1>TOGETHER</h1>
      </div>
      <div className="flex flex-col items-start justify-start px-5 py-1 gap-3 h-[38%] w-full bg-slate-700 max-md:h-[55%]">
      <h2 className="text-2xl text-zinc-900">Reach out to me</h2>
        <div className="flex items-center justify-center gap-10">
          <i className="cursor-pointer fa-solid fa-phone fa-2xl"></i>
          <Link to={"https://github.com/anand1565"}>
            <i className="cursor-pointer fa-brands fa-github fa-2xl"></i>
          </Link>
          <Link to={"https://www.linkedin.com/in/anand-kumar-8b9905235/"}>
            <i className="cursor-pointer fa-brands fa-linkedin fa-2xl"></i>
          </Link>
          <Link to={"mailto:ak7610052@gmail.com"}>
            <i className="cursor-pointer fa-solid fa-envelope fa-2xl"></i>
          </Link>
          <Link to={"https://www.facebook.com/profile.php?id=100010031988661"}>
            <i className="cursor-pointer fa-brands fa-facebook fa-2xl"></i>
          </Link>
        </div>
        <div>
          <Link>
            <button className="bg-red-500 py-1 px-2 rounded-md text-xl text-white font-semibold tracking-wider">
              Resume
            </button>
          </Link>
        </div>
        <div className="text-xl tracking-wider font-semibold py-2">
          <h1>Anand Kumar</h1>
          <h3>University of Engineering & Management, Jaipur</h3>
          <h3>+91 9110049233</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
