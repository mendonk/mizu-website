import React, { useState, useRef } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";
import Logo from "../../src/images/logo.svg";
import keyFeaturesLogo from "../images/keyFeaturesLogo.png";
import MainIMG from "../images/mainImg.png";
import CopyIcon from "../images/copyicon.svg";
import ExampleImage from "../images/exampleImage.png";
import StandloneImage from "../images/standalone.png";

import "./index.css";

const IndexPage = () => {
    const [activeTab, setActiveTab] = useState("mac");
    const [mizuLink, setMizuLink] = useState(
        "curl -O https://static.up9.com/mizu/main/darwin.amd64/mizu && chmod 755 mizu"
    );
    const quickStart = useRef(null);
    const downloadCopyRef = useRef(null);
    const runCopyRef = useRef(null);
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
                                Download
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
                    <h1>Download</h1>
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
                        {`is a standalone tool (written in Golang)  that you can download
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
                                            "curl -O https://static.up9.com/mizu/main/darwin.amd64/mizu && chmod 755 mizu"
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
                            <span ref={runCopyRef}>{`mizu tap <podname>`}</span>
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
                                You should have <strong>kubectl</strong>{" "}
                                configured to run against your Kubernetes
                                cluster.
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
                    <div className="standaloneDescription">
                        <span>To see</span>&nbsp;
                        <img src={Logo} alt="Mizu" />
                        &nbsp;
                        <span>standalone UI, point your browser to </span>
                    </div>
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
                            <li>
                                <strong>catalog</strong>ue-6676dc489b-6tx9h
                            </li>
                            <li>
                                <strong>catalo</strong>gue-db-69bd898747-7p8rq
                            </li>
                            <li>
                                <strong>front-end</strong>-946fd755f-8t6gp
                            </li>
                        </ul>
                    </div>
                </Card>
            </section>
        </Layout>
    );
};

export default IndexPage;
