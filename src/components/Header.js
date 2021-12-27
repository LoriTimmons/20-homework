import React from 'react';
// Need to use Nav 🚫
import Navigation from './Navigation';

function Header () {
    return (
        <header className='header'>
        <h1>
            <a href="/">Lori Timmons</a>
            <Navigation/>
        </h1>
        <h2></h2>
    </header>
    )
}

export default Header;