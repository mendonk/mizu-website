import * as React from "react";
import Helmet from "react-helmet";
import logo from "../../src/images/logo.svg";
import SlackIcon from "../../src/images/slackicon.svg";
import TwitterIcon from "../../src/images/twittericon.svg";
import GithubIcon from "../../src/images/githubicon.svg";
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
        <li>Features</li>
        <li>Starting</li>
      </ul>
      <div className="header-icons">
        <ul>
          <li>
            <img src={GithubIcon} alt="Github" />
          </li>
          <li>
            <img src={SlackIcon} alt="Slack" />
          </li>
          <li>
            <img src={TwitterIcon} alt="Twitter" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
