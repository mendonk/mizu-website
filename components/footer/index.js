import * as React from "react";
import MizuFooterLogo from "../../src/images/MizuFooterLogo.svg";
import TwitterFooter from "../../src/images/TwitterFooter.svg";
import GithubFooter from "../../src/images/GithubFooter.svg";
import "./footer.css";

const Footer = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <footer>
            <div className="footerLogo">
                <img src={MizuFooterLogo} alt="Footer IMG" />
            </div>
            <div className="footerIcons">
                <a
                    href="https://github.com/up9inc/mizu/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="" src={GithubFooter} alt="Github Icon" />
                </a>

                <a
                    href="https://twitter.com/up9inc"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="" src={TwitterFooter} alt="Twitter Icon" />
                </a>
            </div>
            <div className="footerCopy">
                <span>
                    Built and maintained by <b>UP9</b> &copy; ({currentYear})
                </span>
            </div>
        </footer>
    );
};

export default Footer;
