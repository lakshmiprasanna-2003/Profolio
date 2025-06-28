import React from 'react'
import './Projects.css';

const projects = [
  {
    title: 'Restaurant Ordering Apllication',
    description: 'Developed a responsive restaurant ordering app using React and Redux with table selection, item filtering, and real-time order tracking.',
    tech: ['React.js', 'Redux', 'JavaScript', 'HTML/CSS'],
    // github: 'https://github.com/yourusername/subtitle-extractor',
  },
  
  {
    title: 'Currency Exchanger',
    description: 'A simple web app that fetches real-time currency exchange rates using the Currency API and allows users to convert between global currencies instantly.',
    tech: ['HTML', 'CSS', 'Java Script'],
    // github: 'https://github.com/yourusername/pose-activity-detection',
  },
  
  {
    title: 'URL Shortener',
    description: 'A full-stack application that generates short links for long URLs, tracks click count, and offers analytics.',
    tech: ['React', 'Node.js', 'MongoDB'],
    // github: 'https://github.com/yourusername/url-shortener',
  },

];


const Project = () => {
  return (
    <section id="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {/* <i className="fab fa-github"></i> View on GitHub */}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project