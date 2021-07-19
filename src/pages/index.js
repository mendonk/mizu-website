import React, { useState, useRef } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";

import Logo from "../../src/images/logo.svg";
import GithubIcon from "../images/btnGithubIcon.svg";
import keyFeaturesLogo from "../images/keyFeaturesLogo.png";
import MainIMG from "../images/mainImg.png";
import MizuFooterLogo from "../images/MizuFooterLogo.svg";
import SlackFooter from "../images/SlackFooter.svg";
import TwitterFooter from "../images/TwitterFooter.svg";
import GithubFooter from "../images/GithubFooter.svg";
import CopyIcon from "../images/copyicon.svg";
import ExampleImage from "../images/exampleImage.png";
import {pageData} from '../data/home.json';

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
                            <h2>{pageData["info-h2"]}</h2>
                            <h2>{pageData["info-h3"]}</h2>
                            <p className="txtDescription">
                                {pageData["text-description"]}
                            </p>
                            <p>
                                {pageData["text-lower-description"]}
                            </p>
                            <button
                                className="btnHome"
                                onMouseDown={() => {
                                    quickStart.current.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {pageData["button-label"]}
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
                <Card>
                    <h1>{pageData["key-features-h1"]}</h1>
                </Card>
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
                                {pageData["feature-cli"]}
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#F7B202" }}
                            />
                            <div className="singleFeature">
                                {pageData["feature-requests"]}
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#DB2156" }}
                            />
                            <div className="singleFeature">
                                {pageData["feature-no-installation"]}
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#205CF5" }}
                            />
                            <div className="singleFeature">
                                {pageData["feature-on-premiss"]}
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
            <section ref={quickStart} className="quickStart">
                <Card>
                    <h1>{pageData["quick-start"]}</h1>
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
                        {pageData["quick-download"]}
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
                                    {pageData["mac"]}
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
                                    {pageData["linux"]}
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
                            <h4 className="lblOfQuickStartCodeRow">{pageData["download"]}</h4>
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
                            <h4 className="lblOfQuickStartCodeRow">{pageData["run"]}</h4>
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
                        <h4 className="txtNotes">{pageData["notes"]}</h4>
                        <ul className="quickStartList">
                            <li>{pageData["note-1"]}</li>
                            <li>{pageData["note-2"]}</li>
                            <li>{pageData["note-3"]}</li>
                        </ul>
                    </div>
                </Card>
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        justifyContent: "center",
                        marginTop: "50px",
                    }}
                >
                    <a
                        className="btnHome"
                        href="https://github.com/up9inc/mizu"
                        target="_blank"
                        rel="noreferrer"
                        style={{ width: "240px" }}
                    >
                        Get the Code&nbsp;&nbsp;&nbsp;&nbsp;
                        <img
                            className="githubIcon"
                            src={GithubIcon}
                            alt="Github Icon"
                        />
                    </a>
                </Card>
            </section>
            <section className="commandLineArguments">
                <Card>
                    <h1>{pageData["cli-arguments"]}</h1>
                </Card>
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        justifyContent: "center",
                        margin: "50px 0",
                    }}
                >
                    <span className="info">
                        {pageData["cli-arguments-subheading"]}
                    </span>
                    &nbsp;
                    <span className="info" style={{ color: "#205CF5" }}>
                        {pageData["mizu-help-cmd"]}
                    </span>
                    &nbsp;
                    <span className="info">or</span>&nbsp;
                    <span className="info" style={{ color: "#205CF5" }}>
                        {pageData["mizu-help-label"]}
                    </span>
                </Card>
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "50px 0",
                    }}
                >
                    <div className="codeBlock" ref={commandLineCopyRef}>
                        <pre id="commandArguments">
                            {`Usage: mizu tap PODNAME [flags]

Flags:
  -p, --gui-port uint16 Provide a custom port for the web interface webserver (default 8899) 
  -h, --help help for tap
  -k, --kubeconfig string Path to kubeconfig file 
    --mizu-image string Custom image for mizu collector (default "gcr.io/up9-docker-hub/mizu/develop:latest")
    --mizu-port uint16 Port which mizu cli will attempt to forward from the mizu collector pod (default 8899)
  -n, --namespace string Namespace selector

Example: mizu tap front-end-794b5c7f6f-bvj54 -n sock-shop`}
                        </pre>
                        <div className="copyCode">
                            <img
                                src={CopyIcon}
                                alt="Copy Icon"
                                onMouseDown={(e) => {
                                    const copyText =
                                        document.getElementById(
                                            "commandArguments"
                                        ).textContent;
                                    const textArea =
                                        document.createElement("textarea");
                                    textArea.textContent = copyText;
                                    document.body.append(textArea);
                                    textArea.select();
                                    document.execCommand("copy");
                                }}
                            />
                        </div>
                    </div>
                </Card>
            </section>
            <section className="example">
                <Card>
                    <h1>{pageData["example"]}</h1>
                </Card>
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "50px 0",
                    }}
                >
                    <span className="info">{pageData["how-tp-get-the"]}</span>
                    <span className="info" style={{ color: "#205CF5" }}>
                        {pageData["prod-name"]}
                    </span>
                </Card>
                <Card
                    customStyle={{
                        padding: "20px",
                        background: "#FFF",
                    }}
                >
                    <div className="exampleCommand">
                        <span ref={exampleKubeCtlCopyRef}>
                            {pageData["kubectl-get-pods"]}
                        </span>
                        <img
                            src={CopyIcon}
                            alt="Copy Icon"
                            onMouseDown={() => {
                                navigator.clipboard.writeText(
                                    exampleKubeCtlCopyRef.current.innerText
                                );
                            }}
                        />
                    </div>
                    <div className="exampleImage">
                        <img src={ExampleImage} alt="Example IMG" />
                    </div>
                    <div className="exampleCommand">
                        <span ref={exampleTapCopyRef}>
                            {pageData["mizu-tap"]}
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
                        Built and maintained by <b>UP9</b> &copy; ({currentYear})
                    </span>
                </div>
            </footer>
        </Layout>
    );
};

export default IndexPage;
