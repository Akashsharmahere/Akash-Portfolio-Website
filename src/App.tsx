import React from 'react';
import './index.css';

function App() {
  return (
    <div className="portfolio-container">
      <header>
        <h1>Akash Sharma</h1>
        <p>Software Developer | Designer | Creative Technologist</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Passionate developer with expertise in web technologies, 
          creating innovative solutions that blend creativity and technical skill.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "HTML", 
            "CSS", 
            "Java", 
            ".NET framework",
            "OOPs", 
            "SQL",
            "C Programming", 
            "Git", 
            "Github", 
            "Mongodb" 
          ].map(skill => (
            <div key={skill} className="skill-tag">{skill}</div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {[
            { 
              name: "Portfolio Site", 
              description: "Responsive personal portfolio built with React",
              link: "https://github.com/yourusername/portfolio"
            },
            { 
              name: "Project 2", 
              description: "Innovative web application",
              link: "#" 
            }
          ].map(project => (
            <div key={project.name} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>📧 akashsharma110103@gmail.com</p>
        <p>Mobile - 7027426898</p>
        <p>🌐 GitHub | LinkedIn</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Akash Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;