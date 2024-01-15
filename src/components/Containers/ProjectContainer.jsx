import React from 'react';

const ProjectContainer = (props) => {

  return (
    <div className="project-container mx-[1em] my-4">
      {(props.project.href.length > 0) ? 
      <div className="h-max">
        <a href={props.project.href} target="_blank" className="proj-link">
          <img src={`${import.meta.env.VITE_PUBLIC}/${props.project.imgSrc}`} className="project-pic object-contain w-full h-3/4 rounded-[10px]" loading="lazy" alt="Project Image" />
        </a>
        <p className="subtext">
          <strong>
            <a href={props.project.href} target="_blank">{props.project.name}</a>
          </strong>
        </p>
      </div> :
      <>
        <img src={`${import.meta.env.VITE_PUBLIC}/${props.project.imgSrc}`} className="project-pic object-fill w-full h-3/4 rounded-[10px]" loading="lazy" alt="Project Image" />
        <p className="subtext">
          <strong>
            <span>{props.project.name}</span>
          </strong>
        </p>
      </>
      }
      <p className="proj-desc">{props.project.description}</p>
      {(props.project.github.length > 0) ? <a href={props.project.github} target="_blank">Github Repo</a> : <></>}
    </div>
  );
};

export default ProjectContainer;
