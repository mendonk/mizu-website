import * as React from "react";
// import { Link } from "gatsby";
import logo from "../src/images/logo.svg";

const Header = () => (
  <header>
    <div className="image">
      <img src={logo} alt="Logo" />
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>How it Works</li>
      </ul>
    </nav>
  </header>
);

export default Header;
