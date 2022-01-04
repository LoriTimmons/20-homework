import React from 'react';
import runBuddy from "../../assets/images/runBuddy.png";
import santasList from "../../assets/images/santas-list.png";
import coffeeConnection from "../../assets/images/01-screenshot.png"

function Projects () {
    return (
        <div>
           <h2>Projects</h2>
        <div id="work" class= "project1">
            <img src={runBuddy}/>
            <a href="https://loritimmons.github.io/run-buddy/"><h1 class= "overlay-title1">Run Buddy</h1></a>
        </div> 

        <div className='flex-row'>
            <div className="project2">
                <h3>Coffee Connection</h3>
                <a href="https://doctormuch.github.io/fs-joe-java-journey/" target="_blank">
                <img src={coffeeConnection}/>
                </a>
            </div>
            <div className="project3">
                <h3>Santa's List</h3>
                <a href="https://santasnicelist.herokuapp.com/ " target="_blank">
                <img class= "project3-img" src={santasList}/>
                </a>
            </div>
    </div>
        
        </div>
    )
}

export default Projects;