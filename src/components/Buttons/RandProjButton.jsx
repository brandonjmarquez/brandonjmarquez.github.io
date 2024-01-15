import React, { useEffect } from "react";
import ProjectsJSON from "../../json/projects.json";

const RandProjButton = () => {
  const selProjLink = () => {
    let projectLinks = ProjectsJSON.map((project) => project.href);
    projectLinks.length = projectLinks.length - 1;
    projectLinks = projectLinks.filter((link) => link !== "https://brandonjmarquez.github.io/Website");

    if(projectLinks.length > 0)
      setTimeout(() => {
        window.open(projectLinks[Math.round(Math.random() * (projectLinks.length - 1))], "_blank");
      }, 700);
  }

  return (
    <>
      <style>
        {`
          @keyframes roulette {
            ${
              (() => {
                let str = "";
                let percent = 0;
                for(let i = 0; i < ProjectsJSON.length - 1; i++) {
                  str += `${percent}% { background-image: url("${ProjectsJSON[i].imgSrc}"); }\n`;
                  percent = 100 / (ProjectsJSON.length - 1) * (i + 1);
                }
                return str;
              })()
            }
          }
        `}
      </style>
      <div className="justify-center left-0 right-0 mx-auto">
        <button type="button" className="peer self-center w-max sm:[px-4 py-3] px-2 py-1 rounded-full bg-custom-300 z-40" onClick={selProjLink}>
          <p className="mx-2 z-40">Go to a random project of mine!</p>
        </button>
        <div id="smk-roulette-border" className="lg:block hidden my-3 peer-has-[:hover]:translate-y-full peer-has-[:hover]:-z-10 absolute -z-10 top-[0.65rem] transition-all duration-700
            after:absolute after:bg-custom-100 after:h-full after:w-full after:top-0 after:left-0 after:-z-20 after:animate-roulette after:bg-contain after:bg-center"
        >
          <img src={`${import.meta.env.VITE_PUBLIC}/smk-roulette.png`} alt="mario kart roulette" className="mx-auto z-10"/>
        </div>
      </div>
    </>
  );
}

export default RandProjButton;