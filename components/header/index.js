import * as React from "react";
import { Helmet } from "react-helmet";
import logo from "../../src/images/logo2.svg";
import TwitterIcon from "../../src/images/twittericon.svg";
import GithubIcon from "../../src/images/githubicon.svg";
import SlackIcon from "../../src/images/slackicon.svg";

import "./header.css";

const Header = ({ siteTitle }) => (
    <header>
        <Helmet>
            <title>{siteTitle}</title>
            <script type="text/javascript">
                {`
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:2577905,hjsv:6};
                        a=o.getElementsByTagName(‘head’)[0];
                        r=o.createElement(‘script’);r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,‘https://static.hotjar.com/c/hotjar-','.js?sv=’);
                `}
            </script>
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
                        href="https://github.com/up9inc/mizu/tree/main"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={GithubIcon} alt="Github" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://join.slack.com/t/up9/shared_invite/zt-tfjnduli-QzlR8VV4Z1w3YnPIAJfhlQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={SlackIcon} alt="Slack" />
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
