import React, { useState, useRef } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";
import CodeBlock from "../../components/codeBlock";
import Logo from "../../src/images/logo.svg";
import keyFeaturesLogo from "../images/keyFeaturesLogo.png";
import MainIMG from "../images/mainImg.png";
import ExampleImage from "../images/exampleImage.png";
import StandloneImage from "../images/standalone.png";

import "./index.css";

const IndexPage = () => {
    const [activeTab, setActiveTab] = useState("mac");
    const [mizuLink, setMizuLink] = useState(
        "curl -Lo mizu https://github.com/up9inc/mizu/releases/latest/download/mizu_darwin_amd64 && chmod 755 mizu"
    );

    const downloadCopyRef = useRef(null);
    const quickStart = useRef(null);
    const runCopyRef = useRef(null);
    const catalogueCopyRef = useRef(null);
    const exampleTapCopyRef = useRef(null);
    const mizuTapRef = useRef(null);

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
                                            "curl -Lo mizu https://github.com/up9inc/mizu/releases/latest/download/mizu_darwin_amd64 && chmod 755 mizu"
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
                                            "curl -Lo mizu https://github.com/up9inc/mizu/releases/latest/download/mizu_linux_amd64 && chmod 755 mizu"
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
                        <CodeBlock
                            title="Download"
                            codeText={mizuLink}
                            copyRef={downloadCopyRef}
                            animation={true}
                        />
                        <CodeBlock
                            title="Run"
                            codeText="mizu tap <podname>"
                            copyRef={runCopyRef}
                        />
                    </div>
                    <div className="quickStartCodeContainer">
                        <h4 className="txtNotes">Notes</h4>
                        <ul className="quickStartList">
                            <li>
                                You should have <strong>kubectl</strong>{" "}
                                configured to run against your Kubernetes
                                cluster.
                            </li>
                            <li>
                                For file checksum and more downloads please see
                                our Github{" "}
                                <a
                                    href="https://github.com/up9inc/mizu/releases/latest/"
                                    target="_blank"
                                >
                                    Releases
                                </a>{" "}
                                page
                            </li>
                        </ul>
                    </div>
                </Card>
            </section>
            <section className="standalone">
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        width: "70%",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "50px 0",
                    }}
                    responsiveWidth="responsiveWidth"
                >
                    <div className="standaloneDescription">
                        <span>
                            To see &nbsp;
                            <img src={Logo} alt="Mizu" />
                            &nbsp;
                            <span>standalone UI, point your browser to </span>
                        </span>
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
                        width: "70%",
                        padding: "20px",
                        background: "#FFF",
                        margin: "50px 0",
                    }}
                    responsiveWidth="responsiveWidth"
                >
                    <div className="exampleInfo">
                        <span>Assuming this is my list of running pods:</span>
                    </div>
                    <div className="exampleImage">
                        <img src={ExampleImage} alt="Example IMG" />
                    </div>
                    <CodeBlock
                        title="View traffic of a specific pod, identified by the
                            pod name:"
                        codeText="mizu tap catalogue-b87b45784-sxc8q"
                        copyRef={catalogueCopyRef}
                        textColor="default"
                    />
                    <CodeBlock
                        title="View traffic of several pods, identified by a
                        regular expression:"
                        codeText='mizu tap "(catalo*|front-end*)"'
                        copyRef={exampleTapCopyRef}
                        textColor="default"
                    />

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
                                <strong>catalo</strong>gue-6676dc489b-6tx9h
                            </li>
                            <li>
                                <strong>catalo</strong>gue-db-69bd898747-7p8rq
                            </li>
                            <li>
                                <strong>front-end</strong>-946fd755f-8t6gp
                            </li>
                        </ul>
                    </div>
                    <CodeBlock
                        title="View all API traffic"
                        codeText='mizu tap ".*"'
                        copyRef={mizuTapRef}
                        textColor="default"
                    />
                </Card>
            </section>
        </Layout>
    );
};

export default IndexPage;
