import React, { useState, useRef } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";

import Logo from "../../src/images/logo.svg";
// import GithubIcon from "../images/btnGithubIcon.svg";
import keyFeaturesLogo from "../images/keyFeaturesLogo.png";
import MainIMG from "../images/mainImg.png";
import MizuFooterLogo from "../images/MizuFooterLogo.svg";
import SlackFooter from "../images/SlackFooter.svg";
import TwitterFooter from "../images/TwitterFooter.svg";
import GithubFooter from "../images/GithubFooter.svg";
import CopyIcon from "../images/copyicon.svg";
import ExampleImage from "../images/exampleImage.png";
import StandloneImage from "../images/standalone.png";

import "./index.css";

const IndexPage = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    const [activeTab, setActiveTab] = useState("mac");
    const [mizuLink, setMizuLink] = useState(
        "curl -o mizu https://getmizu.io/mizu/mizu-darwin-amd64 && chmod 755 mizu"
    );
    const quickStart = useRef(null);
    const downloadCopyRef = useRef(null);
    const runCopyRef = useRef(null);
    const commandLineCopyRef = useRef(null);
    const exampleKubeCtlCopyRef = useRef(null);
    const exampleTapCopyRef = useRef(null);

    return (
        <Layout>
            <section className="mainWrapper">
                <Card>
                    <div className="wrapper">
                        <div className="infoWrapper">
                            <h2>API Traffic Viewer</h2>
                            <h2>for Kubernetes</h2>
                            <p className="txtDescription">
                                A simple-yet-powerful API traffic viewer <br />
                                for Kubernetes to help you troubleshoot <br />
                                and debug your microservices.
                            </p>
                            <p>
                                Think TCPDump and Chrome Dev Tools <br />{" "}
                                combined.
                            </p>
                            <button
                                className="btnHome"
                                onMouseDown={() => {
                                    quickStart.current.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Quick Start
                            </button>
                        </div>
                        <div className="mainLogoWrapper">
                            <img
                                className="mainLogo"
                                src={MainIMG}
                                alt="Main Logo"
                            />
                        </div>
                    </div>
                </Card>
            </section>
            <section className="keyFeatures">
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        margin: "50px 0",
                    }}
                >
                    <div className="keyFeatureLogo">
                        <img src={keyFeaturesLogo} alt="Feature Logo" />
                    </div>
                    <div className="featureList">
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#27ae60" }}
                            />
                            <div className="singleFeature">
                                Simple and powerful <b>CLI</b>
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#F7B202" }}
                            />
                            <div className="singleFeature">
                                Real time view of all <b>HTTP</b> requests,{" "}
                                <b>REST</b> and <b>gRPC</b> API calls
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#DB2156" }}
                            />
                            <div className="singleFeature">
                                No installation or code instrumentation
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#205CF5" }}
                            />
                            <div className="singleFeature">
                                Works completely on premises (on-prem)
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
            <section ref={quickStart} className="quickStart">
                <Card>
                    <h1>Quick Start</h1>
                </Card>
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "50px 0",
                    }}
                >
                    <img src={Logo} alt="Mizu" />
                    <span className="txtQuickStart">
                        &nbsp;
                        {`is a <50MB program (written in Golang) that you can download
            and run`}
                    </span>
                </Card>
                <Card
                    customStyle={{
                        width: "70%",
                        borderRadius: "5px",
                        background: "#FFF",
                    }}
                    responsiveWidth="responsiveWidth"
                >
                    <div className="quickStartCodeContainer">
                        <div className="quickStartTab">
                            <div className="quickStartTabItem">
                                <span
                                    role="button"
                                    tabIndex={0}
                                    className={
                                        activeTab === "mac"
                                            ? "quickStartActiveTab"
                                            : ""
                                    }
                                    onMouseDown={() => {
                                        setActiveTab("mac");
                                        setMizuLink(
                                            "curl -o mizu https://getmizu.io/mizu/mizu-darwin-amd64 && chmod 755 mizu"
                                        );
                                    }}
                                >
                                    MAC
                                </span>
                            </div>
                            <div className="quickStartTabItem">
                                <span
                                    role="button"
                                    tabIndex={-1}
                                    className={
                                        activeTab === "linux"
                                            ? "quickStartActiveTab"
                                            : ""
                                    }
                                    onMouseDown={() => {
                                        setActiveTab("linux");
                                        setMizuLink(
                                            "curl -O https://static.up9.com/mizu/main/linux.amd64/mizu && chmod 755 ./mizu"
                                        );
                                    }}
                                >
                                    LINUX
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="quickStartCodeContainer"
                        style={{
                            borderTop: "2px solid #e9ebf8",
                            borderBottom: "2px solid #e9ebf8",
                            paddingTop: "0px",
                        }}
                    >
                        <div className="quickStartCodeRow">
                            <h4 className="lblOfQuickStartCodeRow">Download</h4>
                        </div>
                        <div
                            className="exampleCommand"
                            style={{ marginTop: "10px" }}
                        >
                            <span
                                ref={downloadCopyRef}
                                className="commandEffect"
                            >
                                {mizuLink}
                            </span>
                            <img
                                src={CopyIcon}
                                alt="Copy Icon"
                                onMouseDown={() => {
                                    navigator.clipboard.writeText(
                                        downloadCopyRef.current.innerText
                                    );
                                }}
                            />
                        </div>
                        <div className="quickStartCodeRow">
                            <h4 className="lblOfQuickStartCodeRow">Run</h4>
                        </div>
                        <div
                            className="exampleCommand"
                            style={{ marginTop: "10px", marginBottom: "30px" }}
                        >
                            <span
                                ref={runCopyRef}
                            >{`mizu tap <podname> -n <namespace>`}</span>
                            <img
                                src={CopyIcon}
                                alt="Copy Icon"
                                onMouseDown={() => {
                                    navigator.clipboard.writeText(
                                        runCopyRef.current.innerText
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <div className="quickStartCodeContainer">
                        <h4 className="txtNotes">Notes</h4>
                        <ul className="quickStartList">
                            <li>
                                You should have kubectl configured to run
                                against your Kubernetes cluster.
                            </li>
                            <li>
                                Namespace is required in case the pod is in a
                                different namespace than the default one.
                            </li>
                            <li>
                                After mizu starts and successfully connects to
                                the specified pod, a local web interface will
                                become available at http://localhost:8899/
                            </li>
                        </ul>
                    </div>
                </Card>
            </section>
            <section className="standalone">
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "50px 0",
                    }}
                >
                    <span>
                        To see mizu’s standalone UI, point your browser to{" "}
                    </span>
                    <a>http://localhost:8899/</a>
                    <div className="standaloneIMG">
                        <img src={StandloneImage} alt="Standalone IMG" />
                    </div>
                </Card>
            </section>
            <section className="example">
                <Card>
                    <h1>Example</h1>
                </Card>
                <Card
                    customStyle={{
                        padding: "20px",
                        background: "#FFF",
                        margin: "50px 0",
                    }}
                >
                    <div className="exampleInfo">
                        <span>Assuming this is my list of running pods:</span>
                    </div>
                    <div className="exampleImage">
                        <img src={ExampleImage} alt="Example IMG" />
                    </div>
                    <div className="exampleTXT">
                        <span>
                            View traffic of a specific pod, identified by the
                            pod name:
                        </span>
                    </div>
                    <div className="exampleCommand">
                        <span ref={exampleTapCopyRef}>
                            mizu tap catalogue-b87b45784-sxc8q
                        </span>
                        <img
                            src={CopyIcon}
                            alt="Copy Icon"
                            onMouseDown={() => {
                                navigator.clipboard.writeText(
                                    exampleTapCopyRef.current.innerText
                                );
                            }}
                        />
                    </div>
                    <div className="exampleTXT">
                        <span>
                            View traffic of several pods, identified by a
                            regular expression:
                        </span>
                    </div>
                    <div className="exampleCommand">
                        <span ref={exampleTapCopyRef}>
                            mizu tap "(catalo*|front-end*)"
                        </span>
                        <img
                            src={CopyIcon}
                            alt="Copy Icon"
                            onMouseDown={() => {
                                navigator.clipboard.writeText(
                                    exampleTapCopyRef.current.innerText
                                );
                            }}
                        />
                    </div>
                    <div className="exampleDescription">
                        <span>
                            The above command will observe the traffic of the
                            following pods as their names match the regular
                            expression:
                        </span>
                    </div>
                    <div className="listCommands">
                        <ul>
                            <li>catalogue-6676dc489b-6tx9h</li>
                            <li>catalogue-db-69bd898747-7p8rq</li>
                            <li>front-end-946fd755f-8t6gp</li>
                        </ul>
                    </div>
                </Card>
            </section>
            <footer>
                <div className="footerLogo">
                    <img src={MizuFooterLogo} alt="Footer IMG" />
                </div>
                <div className="footerIcons">
                    <a
                        href="https://github.com/up9inc/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className=""
                            src={GithubFooter}
                            alt="Github Icon"
                        />
                    </a>
                    <a
                        href="https://up9inc.slack.com/"
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
                        <img
                            className=""
                            src={TwitterFooter}
                            alt="Twitter Icon"
                        />
                    </a>
                </div>
                <div className="footerCopy">
                    <span>
                        Built and maintained by <b>UP9</b> &copy; ({currentYear}
                        )
                    </span>
                </div>
            </footer>
        </Layout>
    );
};

export default IndexPage;
