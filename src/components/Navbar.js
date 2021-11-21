import React from "react";
import '../styles/Navbar.css';


// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = () => {
  return (
    <nav className="photo1">
        <figure className="photo1" role="img" aria-label="Work space"></figure>
        <img src={require("../assets/image.jpg").default} alt="pp" width = "15%"/>
    </nav>
  );
}

export default Navbar;
