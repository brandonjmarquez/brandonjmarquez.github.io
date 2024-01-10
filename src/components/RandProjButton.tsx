import React, { useEffect } from "react";
import ProjectsJSON from "../json/projects.json";

const RandProjButton = () => {
  useEffect(() => {})

  const colProjLinks = () => {
    let projectLinks = ProjectsJSON.map((project) => project.href);
    projectLinks.length = projectLinks.length - 1;
    console.log(projectLinks);
    if(projectLinks.length > 0) window.open(projectLinks[Math.round(Math.random() * (projectLinks.length - 1))]);
  }

  return (
    <div>
      <button type="button" className="w-max sm:px-4 sm:py-3 px-2 py-1 rounded-full bg-custom-300 border-2 hover:border-custom-400 hover:animate-pulse" onClick={colProjLinks}>Go to a random project of mine!</button>
    </div>
  );
}

export default RandProjButton;