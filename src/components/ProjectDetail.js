import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectDetail;
