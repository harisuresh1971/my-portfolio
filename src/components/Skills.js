import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <ul className="list-group">
        {skills.map((skill, index) => (
          <li key={index} className="list-group-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
