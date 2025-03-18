import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <div className="content">
        <h1>👋 Hi, I'm Omid Fooladvand!</h1>
        <h2>🚀 Frontend Developer | Crafting Modern Web Experiences</h2>
        <p>
          Passionate about building <strong>responsive, high-performance</strong> web applications using the latest technologies.
          Skilled in <strong>HTML, CSS, JavaScript, SASS, TailwindCSS, ReactJS, TypeScript, Next.js, and Git.</strong>
        </p>
        <p>
          I thrive on creating <strong>visually appealing, user-friendly, and efficient</strong> web solutions while following best practices.
          Always eager to learn and explore new technologies to enhance my development skills.
        </p>
        <p>
          Let's collaborate and build something amazing together! 🚀
        </p>
        <a href="#contact" className="contact-btn">Get in Touch</a>
      </div>
      <br />
      <hr />
    </header>
  );
};

export default Header;
