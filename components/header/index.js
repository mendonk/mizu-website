import * as React from "react";
import { Helmet } from "react-helmet";
import logo from "../../src/images/logo2.svg";
import TwitterIcon from "../../src/images/twittericon.svg";
import GithubIcon from "../../src/images/githubicon.svg";

import "./header.css";

const Header = ({ siteTitle }) => (
    <header>
        <Helmet>
            <title>{siteTitle}</title>
        </Helmet>
        <div className="image">
            <a href="/">
                <img src={logo} alt="Logo" />
            </a>
        </div>
        <nav>
            <ul>
                <li>
                    <a
                        href="https://github.com/up9inc/mizu/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={GithubIcon} alt="Github" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/up9inc"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={TwitterIcon} alt="Twitter" />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
