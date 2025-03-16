import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <div className="mb-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={link}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
