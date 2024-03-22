import React from "react";
import ProfilePic from "../assets/Anand.jpg";

const AboutMe = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="w-[80%] h-[90vh] ">
        <div className="flex flex-col items-start justify-end py-10 h-[40%] text-[5vw] font-bold tracking-wider text-zinc-800">
          <h1>Hello,</h1>
          <h2>I'm Anand Kumar</h2>
        </div>
        <div className="h-[50%] flex items-start">
          <div className="w-[35%] h-[90%] flex items-center justify-start">
            <img
              src={ProfilePic}
              alt="Profile Picture"
              className=" h-[90%] w-[80%]  rounded-md"
            />
          </div>
          <div className="w-[65%] h-full pt-3 flex flex-col items-start start-center text-justify gap-2">
            <h1 className="text-3xl font-semibold">About me</h1>
            <p className="text-zinc-600 leading-7 max-md:text-[2vw]">
              I am a MERN stack developer. I have done my Bachelor of Technology in Computer Science & Engineering(CSE) from University of Engineering & Management, Jaipur. I have developed several project on MERN stack and Data analysis which you can find it on the project section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
