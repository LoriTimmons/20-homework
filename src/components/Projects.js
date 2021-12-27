import React from 'react';

function Projects () {
    return (
        <div>
           <h2>Projects</h2>
        <div id="work" class= "project1">
            <img src=".src/assets/images/Run-Buddy.png"/>
            <a href="https://loritimmons.github.io/run-buddy/"><h1 class= "overlay-title1">Run Buddy</h1></a>
        </div> 

        <div class="project2-3">
            <div class="project2">
                <h3>Coffee Connection</h3>
                <a href="https://doctormuch.github.io/fs-joe-java-journey/" target="_blank">
                <img src= "assets/images/01-screenshot.png"/>
                </a>
            </div>
            <div class="project3">
                <h3>Santa's List</h3>
                <a href="https://santasnicelist.herokuapp.com/ " target="_blank">
                <img class= "project3-img" src="assets/images/Screen Shot 2021-11-21 at 5.01.54 PM.png"/>
                </a>
            </div>
    </div>
        
        </div>
    )
}

export default Projects;