import React from "react";
import ProfilePic from "../assets/Anand.jpg";

const About = () => {
  return (
    <div className="flex items-start justify-center w-[100%] h-[90vh] ">
      <div className="w-[75%] h-full flex max-md:flex max-md:flex-col">
        <div className="w-[50%] max-md:w-full h-full  flex items-center justify-center p-[3%]">
          <img
            src={ProfilePic}
            alt="profilePicture"
            className="w-[76%] max-md:h-[70%] max-md:w-[40%] rounded-full h-[50vh]"
          />
        </div>
        <div className="w-[50%] max-md:text-[2vw] max-md:w-full h-full  lg:flex flex-col gap-2 items-start justify-center p-[3%]">
          <h1>Hello!</h1>
          <p>
            I'm Anand Kumar - a MERN stack developer . I have build lots of
            projects on MERN stack
          </p>
          <p>
            I have been known for my skills and projects developed on React.js ,
            Node.js , Express.js , MongoDB, Machine Learning and Data Analysis
            projects.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            animi sequi, quas corporis odit natus velit placeat soluta
            voluptatibus laborum minima doloremque maxime alias doloribus ea,
            mollitia veniam nobis commodi nihil dignissimos nemo blanditiis
            cumque optio. Temporibus voluptates consequatur voluptate minus
            voluptatum ducimus, fugiat eaque iste suscipit, iure nemo quae ipsa
            id recusandae nobis, dolorum dolores doloribus pariatur. Facere
            adipisci d
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
