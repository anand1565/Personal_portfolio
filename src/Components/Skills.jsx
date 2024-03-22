import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const [skill, setSkill] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_URL}/api/skills/allskill`)
      .then((response) => {
        setSkill(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <div className="w-[90%] h-full flex items-center justify-center gap-2 flex-wrap mt-5">
        {skill.map((item) => {
          return (
            <div className="w-1/4 h-[200px] bg-[crimson] border-2  rounded-md flex items-center justify-center text-xl text-white font-semibold">
              <h3>{item.skill}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
