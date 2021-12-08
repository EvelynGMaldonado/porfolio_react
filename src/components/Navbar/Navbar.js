import React from "react";
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';


// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = () => {
return (
    <>
    <header>
    <h1>Evelyn Maldonado</h1>
    
    <nav>
        <ul className="responsive">
            <li>
                <Link to="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    <a>Projects</a>
                </Link>
            </li>
            <li>
                <Link to="/resume">
                    <a>Resume</a>
                </Link>
            </li>
            <li>
                <Link to ="/contact-info">
                    <a> Contact Information</a>   
                </Link>
            </li>
        </ul>
    </nav>
    </header>
    <nav className="photo1">
        <figure className="photo1" role="img" aria-label="Work space"></figure>
        <img src={require("../../assets/image.jpg").default} alt="pp" width = "15%"/>
    </nav>
    </>
);
}

export default Navbar;
