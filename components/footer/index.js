import * as React from "react";
// import { PopupText } from "react-calendly";
import MizuFooterLogo from "../../src/images/MizuFooterLogo.svg";
import TwitterFooter from "../../src/images/TwitterFooter.svg";
import GithubFooter from "../../src/images/GithubFooter.svg";
import SlackFooter from "../../src/images/SlackFooter.svg";
import "./footer.css";

const Footer = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <footer>
            <div className="footerLogo">
                <img src={MizuFooterLogo} alt="Footer IMG" />
            </div>
            {/* <div className="bookLink">
                <PopupText
                    pageSettings={{
                        backgroundColor: "ffffff",
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: "00a2ff",
                        textColor: "4d5055",
                    }}
                    text="SCHEDULE A DEMO"
                    url="https://calendly.com/up9/book-a-demo"
                />
            </div> */}
            <div className="footerIcons">
                <a
                    href="https://github.com/up9inc/mizu/tree/main"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="" src={GithubFooter} alt="Github Icon" />
                </a>
                <a
                    href="https://join.slack.com/t/up9/shared_invite/zt-tfjnduli-QzlR8VV4Z1w3YnPIAJfhlQ"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="" src={SlackFooter} alt="Slack Icon" />
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
