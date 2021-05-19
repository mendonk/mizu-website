import * as React from "react";
import Helmet from "react-helmet";
import logo from "../../src/images/logo.svg";
import SlackIcon from "../../src/images/slack.svg";
import "./header.css";

const Header = () => (
  <header>
    <Helmet>
      <title>Mizu</title>
    </Helmet>
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
