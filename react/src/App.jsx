import React,  { useEffect, useState } from 'react'
import './App.css'
import myPhoto from './assets/myphoto.png';
import yuLogo from './assets/yu_dev_icon.png';
import previewLandingPage from './assets/preview_landing_page.png';
import todoList from './assets/todoList.byYurika.png';
import calculator from './assets/Calculatorstylemac.png';
import githubLogo from './assets/github_logo.png';
import linkedinLogo from './assets/linkedin_logo.png';




function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={scrolled ? 'scrolled' : ''}>
        <nav>
          <div className="logo">
          <img src={yuLogo} alt="Yurika Dev Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="section home">
        <div className="home-content">
          <div className="home-text">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm Yurika, a beginner software developer passionate about learning and building projects.</p>
            <div className="social-buttons">
              <a href="https://github.com/yurikamota" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="icon-button" />
              </a>
              <a href="https://www.linkedin.com/in/yurikamota/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="icon-button" />
              </a>
            </div>
          </div>
          <div className="home-image">
            <img src={myPhoto} alt="Yurika" />
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Digital Portfolio Creation</h3>
            <p>Custom online portfolios for professionals to showcase their work.</p>
          </div>
          <div className="service-card">
            <h3>Business Landing Pages</h3>
            <p>Responsive landing pages designed to convert visitors into customers.</p>
          </div>
          <div className="service-card">
            <h3>JavaScript Automation</h3>
            <p>Automation of repetitive tasks using JavaScript solutions.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
              <a href="https://github.com/yurikamota/landing_page_ballerini" target="_blank" rel="noopener noreferrer">
                <img src={previewLandingPage} alt="Landing Page Project" />
              </a>
            <h3>Landing Page</h3>
            <p>Landing Page made with HTML and CSS</p>
          </div>

          <div className="project-card">
             <a href="https://github.com/yurikamota/todolist" target="_blank" rel="noopener noreferrer">
              <img src={todoList} alt="To-Do List Project" />
              </a>
            <h3>To-do List</h3>
            <p>Project made with HTML, CSS and JavaScript.</p>
          </div>

          <div className="project-card">
             <a href="https://github.com/yurikamota/calculator" target="_blank" rel="noopener noreferrer">
             <img src={calculator} alt="Mac Style Calculator" />
              </a>
            <h3>Calculator Style Mac</h3>
            <p>Made with JavaScript</p>
          </div>
        </div>

        
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required/>
          <input type="email" placeholder="Email" required/>
          <textarea rows="5" placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>       
      </section>

      <footer>
        <p>&copy; 2025 Yurika Dev. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
