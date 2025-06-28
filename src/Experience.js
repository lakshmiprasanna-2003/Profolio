import React from 'react';
import './Experience.css';


const experiences = [
  {
    role: 'Backend Development Intern',
    company: 'Presear Softwares',
    duration: 'May 2024 – June 2024',
    description: 'Worked on building RESTful APIs, handled authentication modules, and contributed to backend logic using Django.',
    icon: 'fas fa-code',
  },
  {
    role: 'Smart India Hackathon Finalist',
    company: 'SIH 2023',
    duration: 'Aug 2023',
    description: 'Engineered a unique prototype addressing a real-world problem, collaborated with professionals, and participated in a post-hackathon bootcamp.',
    icon: 'fas fa-lightbulb',
  },
];

const Experience = () => {
  return (
    <section id="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="exp-icon">
              <i className={exp.icon}></i>
            </div>
            <div className="exp-content">
              <h4>{exp.role}</h4>
              <h5>{exp.company}</h5>
              <span className="exp-duration">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
