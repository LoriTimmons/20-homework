import React from "react";
import avatar from "../../assets/images/AvatarMaker.svg";



function AboutMe() {
  return (
    <div id="about-me" className="about-me">
      <h2>Me</h2>
      <p>Hello! I am Lori Timmons and I want to enhance your online footprint</p>
      <img src={ avatar }/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero
        commodi autem ab ullam hic suscipit, facere quisquam. Exercitationem
        consectetur quia incidunt adipisci beatae obcaecati ipsa est aliquam,
        deserunt quo.
      </p>
    </div> 

  );
}

export default AboutMe;