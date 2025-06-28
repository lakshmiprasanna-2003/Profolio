import React from 'react';
import './Certificates.css';

const certificates = [
  { title: 'Python for Data Science', org: 'Coursera', year: '2023' },
  { title: 'Frontend Development Bootcamp', org: 'Udemy', year: '2022' },
  { title: 'Django REST Framework', org: 'Great Learning', year: '2024' },
];

const Certificates = () => {
  return (
    <section id="certificates-section">
      <h2 className="cert-title">Certificates</h2>
      <ul className="cert-list">
        {certificates.map((cert, idx) => (
          <li key={idx}>
            <h4>{cert.title}</h4>
            <p>{cert.org} — {cert.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
