import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import pic2 from './pic2.jpg';

const Home = () => {
  return (
    <div>
    <section id="about-me">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={pic2} alt="My profile" />
        </div>

        <div className="about-text">
          <p>
            Hi! I'm a passionate developer with a love for building meaningful tech. I specialize in backend development using Python and Django, but I’m equally comfortable with frontend tools like React. I enjoy creating projects that blend functionality, creativity, and clean code.
          </p>
          <p>
            I have a strong foundation in frontend development, where I bring designs to life with clean, responsive, and accessible interfaces. My expertise lies in HTML, CSS, and JavaScript, with React.js being my go-to framework for building dynamic user experiences. I pay close attention to UI/UX principles, ensuring that every interaction feels intuitive and smooth. 
          </p>

          <p>
            I’ve also explored data science using libraries like NumPy and Pandas, and enjoy designing intuitive user experiences with tools like Figma. Whether it's building a smart solution or collaborating with a team — I’m all in.
          </p>
          <div className="about-tags">
            <span>HTML & CSS</span>
            <span>Java Script</span>
            <span>React JS</span>
            <span>Python</span>
            <span>Django</span>
            <span>React</span>
            <span>UI/UX</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home