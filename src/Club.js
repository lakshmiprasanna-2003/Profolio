import React from 'react';
import './Club.css';

const clubs = [
  {
    name: 'GDSC (Google Developer Student Club)',
    role: 'Co-Lead for Web & Android',
    year: '2023 – 2024',
  },
  {
    name: 'GeeksforGeeks Campus Chapter',
    role: 'Senior Executive – Marketing',
    year: '2022 – 2023',
  },
  {
    name: 'Compilescue Newsletter (CSE Dept.)',
    role: 'Convener, led team of 8',
    year: '2023 – Present',
  },
];

const Club = () => {
  return (
    <section id="clubs-section">
      <h2 className="clubs-title">Clubs & Leadership</h2>
      <div className="clubs-list">
        {clubs.map((club, idx) => (
          <div key={idx} className="club-card">
            <h4>{club.name}</h4>
            <p>{club.role}</p>
            <small>{club.year}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Club;
