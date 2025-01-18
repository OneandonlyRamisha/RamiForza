import { div } from "motion/react-client";
import "./NavigationBurger.css";
import { useState } from "react";

export default function NavigationBurger() {
  const [burgerActive, setBurgerActive] = useState(false);

  function handleBurgerClick() {
    setBurgerActive((e) => !e);
  }

  return (
    <div className="burger-nav-section">
      <div
        className={`nav-burg-sidebar-container ${
          burgerActive ? "active" : undefined
        }`}
      >
        <ul className="nav-burg-sidebar" onClick={handleBurgerClick}>
          {/* <li>
            <a className="underline-animations" href="#">
              About Us
            </a>
          </li> */}
          <li>
            <a className="underline-animations" href="#process">
              Process
            </a>
          </li>
          <li>
            <a className="underline-animations" href="#Services">
              Services
            </a>
          </li>
          {/* <li>
            <a className="underline-animations" href="#">
              See Our Work
            </a>
          </li> */}
          <li>
            <a className="underline-animations" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="underline-animations" href="#faqId">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation-mobile-version-container">
        <a href="#">
          <img
            className="burger-logo"
            src="logo.png"
            alt="RamiForza's Brand Logo"
          />
        </a>
        <button
          className={`burger ${burgerActive ? "active" : undefined}`}
          onClick={handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

// logic when media size get below 744px then remove componenet Navgation from display and display this componeent in app jsx
