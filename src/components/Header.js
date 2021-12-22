import React from 'react';

function Header () {
    return (
        <header className='header'>
        <h1>
            <a href="/">Lori Timmons</a>
        </h1>
        <nav>
            
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#work">Projects</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;