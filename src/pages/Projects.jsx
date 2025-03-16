import React, { useEffect, useState, forwardRef } from "react";
import ProjectCard from "../components/ProjectCard";
import Draggable from "react-draggable";

const DraggableProjectCard = forwardRef(({ project }, ref) => (
  <Draggable nodeRef={ref}>
    <div ref={ref}>
      <ProjectCard
        title={project.name}
        description={project.description || "No description available"}
        link={project.html_url}
      />
    </div>
  </Draggable>
));

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.github.com/users/ahsannjavaid/repos");
        const data = await response.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("Unexpected API response:", data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  if (!projects.length) return <p>Loading...</p>

  return (
    <div>
      {projects?.map((project) => {
        const nodeRef = React.createRef();
        return (
          <div key={project.id}>
            <DraggableProjectCard ref={nodeRef} project={project} />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;