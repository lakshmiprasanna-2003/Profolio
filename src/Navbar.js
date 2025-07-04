import React from 'react';
import './index.css';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <a className="navbar-brand"><bold>Protfolio</bold></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/project">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/club">Clubs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar