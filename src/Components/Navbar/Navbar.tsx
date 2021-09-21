import React from "react";
import { Link } from "react-router-dom";
import "./navbar.style.css";

export const Navbar = () => {
  const [isResponsive, setResponsive] = React.useState(false);

  return (
    <nav className="navbar">
      <h2> AstroQuiz </h2>
      <ul
        className={isResponsive ? "nav-links-mobile" : "nav-links"}
        onClick={() => setResponsive(false)}
      >
        <Link to="/" className="nav-home">
          <li> Home </li>
        </Link>
        <Link to="/quiz" className="nav-quiz">
          <li> Quiz </li>
        </Link>
      </ul>

      <button
        onClick={() => setResponsive((responsive) => !responsive)}
        className="mobile-menu-icon"
      >
        {isResponsive ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
};
