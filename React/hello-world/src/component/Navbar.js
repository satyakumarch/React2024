import React from 'react';
import './Navbar.css'; // Assuming you will create a CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png" alt="School Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#login">Login</a></li>
                <p>Navbar</p>
            
            </ul>
        </nav>
    );
}

export default Navbar;
