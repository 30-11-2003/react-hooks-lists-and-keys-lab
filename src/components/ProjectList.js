import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const itemProject=projects.map((projectObj)=>{
    return <ProjectItem key={projectObj.id} name={projectObj.name} about={projectObj.about} />

  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {itemProject}
        {/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
