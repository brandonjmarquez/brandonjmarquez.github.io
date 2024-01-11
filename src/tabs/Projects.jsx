import ProjectContainer from "../components/Containers/ProjectContainer";
import ProjectsJSON from "../json/projects.json";

function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center align-middle w-full h-max">
      <span className="instructions"> Click the images to navigate to where they're hosted.</span>
      <div className="grid-container grid py-[0.5em] px-0 w-full sm:grid-cols-2 grid-rows-1">
        {ProjectsJSON.map((project, index) => 
          <ProjectContainer key={index} project={project} />
        ) }
      </div>
    </section>
  )
}

export default Projects;