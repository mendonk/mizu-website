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
        <li>
          <a href="https://github.com/up9inc/" target="_blank">
            <img src={GithubIcon} alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://up9inc.slack.com/" target="_blank">
            <img src={SlackIcon} alt="Slack" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/up9inc" target="_blank">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
