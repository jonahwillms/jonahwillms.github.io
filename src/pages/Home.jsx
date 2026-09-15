import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">

      <div className="stars"></div>

      <div className="ribbon">
        <h1 className="name">Jonah Willms</h1>
        <p className="contact">Phone: 519-591-2922</p>
        <p className="contact">Email: jpwillms@uwaterloo.ca</p>
        <p>
  <a 
  href="https://www.linkedin.com/in/jonah-willms-9b1365290"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

</p>

<p>
  <a 
    href="/resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Resume
  </a>
</p>

      </div>

      <div className="hero-art">
        <img 
          src="/atpsyth.png" 
          alt="Scientific art" 
          className="hero-img"
        />
      </div>

      <div className="home-buttons">
        <Link to="/experience" className="home-btn">Experience</Link>
        <Link to="/hobbies" className="home-btn">Hobbies</Link>
        <Link to="/projects" className="home-btn">Projects</Link>
      </div>

    </div>
  );
}




