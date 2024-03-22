import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const [projectDetails, SetProjectDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_URL}/api/project/allprojects`)
      .then((response) => {
        SetProjectDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className=" flex justify-center items-center flex-wrap">
        <div className="w-[75%] flex items-center justify-start gap-2 pt-4 flex-wrap">
          {projectDetails.map((project) => {
            return (
              <div
                key={project._id}
                className=" w-[18rem] min-h-60 bg-zinc-100 p-1 border-2 border-zinc-400 rounded-md relative"
              >
                <div className="bg-zinc-200 w-full rounded-md text-center mb-2 p-1">
                  <h3 className="text-[20px] font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm min-h-16">{project.description}</p>
                <div className="w-full min-h-16 border-2 p-1 rounded-md flex flex-wrap gap-1 items-center justify-start inline-block">
                  {project.skills.map((skill, index) => {
                    return (
                      <ul key={index}>
                        <li className="bg-[#d9e8e8] border-1 rounded-md px-1">
                          {skill}
                        </li>
                      </ul>
                    );
                  })}
                </div>
                <div className="text-xs">
                  <ul className="flex gap-2 items-center justify-end w-full">
                    <li>{new Date(project.startDate).toLocaleDateString()}</li>
                    <span>-</span>
                    <li>{new Date(project.endDate).toLocaleDateString()}</li>
                  </ul>
                </div>
                <div className="flex items-center justify-start gap-2 text-sm font-semibold">
                  <button className="block p-1 text-center border-2 border-blue-400 rounded-md bg-blue-300 my-2">
                    <Link to={project.githubLink}>
                      <GitHubIcon />
                    </Link>
                  </button>
                  <button className="block p-1 text-center border-2 border-blue-400 rounded-md bg-blue-300">
                    <Link to={project.deploymentLink}>Deployment</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
