import React from 'react';
import './Skills.css';


const skills = [
  { name: 'HTML & CSS', level: 90, icon: 'fab fa-html5' },
  { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
  { name: 'React.js', level: 80, icon: 'fab fa-react' },
  { name: 'Python', level: 88, icon: 'fab fa-python' },
  { name: 'Django', level: 80, icon: 'fas fa-server' },
  { name: 'Git & GitHub', level: 75, icon: 'fab fa-github' },
  { name: 'Figma', level: 70, icon: 'fab fa-figma' },
  { name: 'SQL', level: 78, icon: 'fas fa-database' },
  { name: 'Core Java (Basics)', level: 65, icon: 'fab fa-java' },
  { name: 'NumPy', level: 75, icon: 'fas fa-square-root-alt' },
  { name: 'Pandas', level: 72, icon: 'fas fa-chart-line' },
];

const Skills = () => {
  return (
    <section id="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-pill" key={idx}>
            <div className="skill-header">
              <i className={`${skill.icon} skill-icon`} />
              <span>{skill.name}</span>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
