import React from "react";

function Navigation() {
  // const categories = [
  //   { name: 'about-me', description: 'All about me'},
  //   { name: 'work', description: 'Things I did'},
  //   { name: 'resume', description: 'Resume'},
  //   { name: 'contact-me', description: 'Resume'}
  // ];

  // const handleClick = () => {
  //   console.log("click handled")
  // }

  return (
    <div className="header">
      <nav>
        <ul>
          <li>
          <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;