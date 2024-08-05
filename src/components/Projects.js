import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.shortDescription}</p>
                <Link to={`/project/${index}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
