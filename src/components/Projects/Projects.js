import React from 'react';
import runBuddy from "../../assets/images/runBuddy.png";
import santasList from "../../assets/images/santas-list.png";
import coffeeConnection from "../../assets/images/01-screenshot.png"
import homeWork13 from "../../assets/images/SS1.png"
import homeWork09 from "../../assets/images/09.png"
import homeWork10 from "../../assets/images/10.png"
import project03 from "../../assets/images/potter/png"

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
        <div>
            <h3>E-Commerce Back End</h3>
            <a href='https://github.com/LoriTimmons/13-Homework'>
            <img src={homeWork13}/>
            </a>
        </div>
        <div>
            <h3>Generate Markdown File</h3>
            <a href='https://github.com/LoriTimmons/09-homework'>
            <img src={homeWork09}/>
            </a>
        </div>
        <div>
            <h3>Command-Line Application</h3>
            <a href='https://github.com/LoriTimmons/10-homework'>
            <img src={homeWork10}/>
            </a>
        </div>
        
        <div>
            <h3>Potter's Marauders</h3>
            <a href='https://stark-plains-49295.herokuapp.com/'>
            <img src={project03}/>
            </a>
        </div>
    </div>
        
        </div>
    )
}

export default Projects;