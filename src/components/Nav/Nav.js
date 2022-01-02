import React from "react";

function Nav(props) {
  console.log(props);

  const handleClick = () => {
    console.log("click handled");
  };

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <span onClick={() => props.setNewPage("AboutMe")}>About Me</span>
          </li>
          <li>
            <span onClick={() => props.setNewPage("Portfolio")}>Portfolio</span>
          </li>
          <li>
          <span onClick={() => props.setNewPage("Resume")}>Resume</span>
          </li>
          <li>
          <span onClick={() => props.setNewPage("ContactMe")}>Contact Me</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

// take out map
// Write out the nav items
// Portfolio Look at the componet with in the componet. An array of objects. Iamge, link and git hub link. Look at gallory
