import React, { useState, useEffect } from "react";
import MizuFooterLogo from "../../src/images/MizuFooterLogo.svg";
import TwitterFooter from "../../src/images/TwitterFooter.svg";
import GithubFooter from "../../src/images/GithubFooter.svg";
import SlackFooter from "../../src/images/SlackFooter.svg";
import sponsoredBYUP9 from "../../src/images/sponsoredByUP9.svg";
import closeBTNwebinarFooterBanner from "../../src/images/closeBTNwebinarFooterBanner.svg";
import kubernetesFooterBanner from "../../src/images/kubernetesFooterBanner.png";
import refael from "../../src/images/refael.png";
import tom from "../../src/images/TomAkehurst.png";
import "./footer.css";

const WEBINAR_BANNER_UP9 = "WEBINAR_BANNER_UP9";

const calculateTimeLeft = () => {
    const year = new Date().getFullYear();

    const difference = +new Date(`${year}/1/31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: `${Math.floor(difference / (1000 * 60 * 60 * 24))}`,
            hours: `${Math.floor((difference / (1000 * 60 * 60)) % 24)}`,
            minutes: `${Math.floor((difference / 1000 / 60) % 60)}`,
            seconds: `${Math.floor((difference / 1000) % 60)}`,
        };
    }

    return timeLeft;
};

const Footer = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    const [displayFooterWebinar, setDisplayFooterWebinar] = useState(false);
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    const counterDown = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);

    useEffect(() => {
        const isShownFooterWebinarLocalStorage =
            localStorage.getItem(WEBINAR_BANNER_UP9);

        if (
            isShownFooterWebinarLocalStorage === null ||
            JSON.parse(isShownFooterWebinarLocalStorage) === false
        ) {
            setDisplayFooterWebinar(true);
        }

        return () => {
            clearTimeout(counterDown);
        };
    }, []);

    const closeWebinarBanner = () => {
        setDisplayFooterWebinar(false);
        localStorage.setItem(WEBINAR_BANNER_UP9, "true");
        clearTimeout(counterDown);
    };

    const registerToWebinar = () => {
        setDisplayFooterWebinar(false);
        localStorage.setItem(WEBINAR_BANNER_UP9, "true");
        clearTimeout(counterDown);
        window.location.href =
            "http://zoom.us/webinar/register/WN_YG3yHmU9Rz25WycXw0ktxw";
    };

    return (
        <footer>
            {displayFooterWebinar && (
                <div className="webinarFooterBanner">
                    <div className="webinarFooterLeftBlock">
                        <img src={sponsoredBYUP9} alt="sponsored by up9" />
                    </div>
                    <div className="wrapperWebinarFT">
                        <div className="webinarBannerLecturer">
                            <img className="refael" src={refael} alt="refael" />
                            <img className="tom" src={tom} alt="tom" />
                        </div>
                        <div className="counterDownWrapper">
                            <h4 className="upcomingWebinarTXT">
                                UPCOMING WEBINAR
                            </h4>
                            <span className="webinarDescriptionTXT">
                                Demonstrating our new{" "}
                                <img
                                    className="kubernetesFooterBannerIMG"
                                    src={kubernetesFooterBanner}
                                    alt="kubernetes"
                                />{" "}
                                capabilities.
                            </span>
                        </div>
                        <div className="webinarCountDownWrapper">
                            <div className="countDownBlock">
                                <h4>{timeLeft.days}</h4>
                                <span>Days</span>
                            </div>
                            <div className="countDownBlock">
                                <h4>{timeLeft.hours}</h4>
                                <span>Hours</span>
                            </div>
                            <div className="countDownBlock">
                                <h4>{timeLeft.minutes}</h4>
                                <span>Minutes</span>
                            </div>
                            <div className="countDownBlock">
                                <h4>{timeLeft.seconds}</h4>
                                <span>Seconds</span>
                            </div>
                        </div>

                        <button
                            className="deffaultBTN webinarBannerRegisterBTN"
                            onClick={registerToWebinar}
                        >
                            REGISTER NOW
                        </button>
                    </div>
                    <div className="webinarFooterRightBlock">
                        <img
                            onClick={() => closeWebinarBanner()}
                            className="closeWebinarFooterBannerIMG"
                            src={closeBTNwebinarFooterBanner}
                            alt="close footer webinar banner"
                        />
                    </div>
                </div>
            )}
            <div className="footerLogo">
                <img src={MizuFooterLogo} alt="Footer IMG" />
            </div>
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
