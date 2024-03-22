import React from "react";
import ProfilePicture from "../assets/Anand.jpg";
import "../CSS/Front.css";

const Front = () => {
  return (
    <div className=" w-[100%] flex items-center justify-center flex-wrap ">
      <div className="w-[85%] h-[100%-10vh] flex items-center justify-center">
        <div className="max-md:w-[50%] lg:w-[40%] h-[80vh]  flex items-center justify-center">
          <img
            className="h-full w-full px-10 py-16 lg:py-12"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWk4YThhZ2xqdG94bW9rdnFmbWd6MDZ1OGF2cmFnZjR2cWNoODdrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif"
            alt="Profile Picture"
          />
        </div>
        <div className=" w-[50%] flex flex-col flex-wrap items-center justify-start gap-2">
          <h3 className="text-3xl tracking-wider max-md:text-2xl font-semibold">
            LET ME SHARE A LITTLE
          </h3>
          <h1 className="text-8xl tracking-wider max-md:text-6xl font-semibold">
            ABOUT ME
          </h1>
          <hr className="hrTag" />
          <h1 className="text-5xl tracking-wider max-md:text-4xl font-semibold text-zinc-600">
            ANAND KUMAR
          </h1>
          <hr className="hrTag" />
        </div>
      </div>
    </div>
  );
};

export default Front;
