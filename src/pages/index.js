import React, { useState, useRef } from "react";

import Layout from "../../components/layout";
import Card from "../../components/card";
import CodeBlock from "../../components/codeBlock";
import MetaTags from "../../components/metaTags";
import Logo from "../../src/images/logo2.svg";
import keyFeaturesLogo from "../images/keyFeaturesLogo.png";
import MainIMG from "../images/mainImg.png";
import ExampleImage from "../images/exampleImage.png";
import StandloneImage from "../images/standalone.png";
import Kubernetes from "../images/kubernetes.png";

import "./index.css";
import {graphql} from "gatsby";

const IndexPage = ({data}) => {
    const {allMarkdownRemark} = data;
    const pageData = allMarkdownRemark.nodes[0]?.frontmatter;
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
    const mizuSecurityTapRef = useRef(null);
    const mizuSecurityTapRedactRef = useRef(null);
    const personallyIdentifiableDataFields = useRef(null);
    const allApiTraffic = useRef(null);

    return (
        <Layout>
            <MetaTags
                description="A simple-yet-powerful API traffic viewer for Kubernetes to help you troubleshoot
                and debug your microservices. Think TCPDump and Chrome Dev Tools combined."
                name="API Traffic viewer for Kubernetes"
            />

            <section className="mainWrapper">
                <Card>
                    <div className="wrapper">
                        <div className="infoWrapper">
                            <h2>{pageData['infoH2']}</h2>
                            <div className="kubernetes">
                                <h2>{pageData['infoH2USubheader']}</h2> &nbsp;{" "}
                                <div>
                                    <div className="kubernetesImgInTitle">
                                        <img
                                            src={Kubernetes}
                                            alt="Kubernetes"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="txtDescription">
                                {pageData['textDescription']}
                            </p>
                            <p>
                                {pageData['textLowerDescription']}
                            </p>
                            <button
                                className="btnHome"
                                onMouseDown={() => {
                                    quickStart.current.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {pageData['buttonLabel']}
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
                                {pageData['simpleAndPowerful']} <b>{pageData['cli']}</b>
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#F7B202" }}
                            />
                            <div className="singleFeature">
                                {pageData["realTime"]} <b>{pageData["http"]}</b> {pageData["requests"]},{" "}
                                <b>{pageData["rest"]}</b> {pageData["and"]} <b>{pageData["grpc"]}</b> {pageData["apiCalls"]}
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#DB2156" }}
                            />
                            <div className="singleFeature">
                                {pageData["featureNoInstallation"]}
                            </div>
                        </div>
                        <div className="featureListItem">
                            <div
                                className="featureListBullet"
                                style={{ background: "#205CF5" }}
                            />
                            <div className="singleFeature">
                                {pageData["featureOnPremiss"]}
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
            <section ref={quickStart} className="quickStart">
                <Card>
                    <h1>{pageData["buttonLabel"]}</h1>
                </Card>
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        justifyContent: "center",
                        margin: "50px 0",
                    }}
                >
                    <img src={Logo} alt="Mizu" className="downloadMIZUIcon" />
                    <span className="txtQuickStart">
                        &nbsp;
                        {`is a standalone tool (written in Golang) that you can download and run`}
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
                                            "curl -Lo mizu https://github.com/up9inc/mizu/releases/latest/download/mizu_linux_amd64 && chmod 755 mizu"
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
                        <h4 className="txtNotes">{pageData['notes']}</h4>
                        <ul className="quickStartList">
                            <li>
                                {pageData['youShouldHave']} <strong>{pageData['kubectl']}</strong>{" "}
                                {pageData['configuredToRun']}
                            </li>
                            <li>
                                {pageData['checksum']} <a
                                    href="https://github.com/up9inc/mizu/releases/latest/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {pageData['releases']}
                                </a> {pageData['page']}
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
                            {pageData['toSee']}
                            <img src={Logo} alt="Mizu" />
                            &nbsp;
                            <span>{pageData['standalone']}</span>
                        </span>
                    </div>
                    <span className="localhostLink">
                        http://localhost:8899/mizu
                    </span>
                    <div className="standaloneIMG">
                        <img src={StandloneImage} alt="Standalone IMG" />
                    </div>
                </Card>
            </section>
            <section className="example">
                <Card>
                    <h1>{pageData['example']}</h1>
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
                        <span>{pageData['runningPods']}</span>
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
                            {pageData['theAboveCommand']}
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
                        copyRef={allApiTraffic}
                        textColor="default"
                    />
                    <CodeBlock
                        title="View all API traffic in pods that belong to a certain namespace"
                        codeText='mizu tap ".*" -n sock-shop'
                        copyRef={mizuTapRef}
                        textColor="default"
                    />
                </Card>
            </section>
            <section className="security">
                <Card>
                    <h1>{pageData['security']}</h1>
                </Card>
                <Card
                    dpFlex="dpFlex"
                    customStyle={{
                        width: "70%",
                        flexDirection: "column",
                        margin: "50px 0",
                    }}
                    responsiveWidth="responsiveWidth"
                >
                    <p>
                        {pageData['when']} <b>{pageData['mizu']}</b> {pageData['tapsData']} <b>{pageData['pii']}</b> {pageData['makeSure']}
                    </p>
                    <p>
                        <br />
                        <b>{pageData['mizu']}</b> {pageData['willRedact']}
                        <b> {pageData['personallyIdentifiableDataFields']} </b>
                        {pageData['varLocated']} <b>{pageData['constsGo']} </b>
                        {pageData['fileInTheFolder']}
                        <a
                            href="https://github.com/up9inc/mizu/tree/develop/api/pkg/sensitiveDataFiltering"
                            target="_blank"
                            className="securityGithubLink"
                            rel="noreferrer"
                        >
                            https://github.com/up9inc/mizu/tree/develop/api/pkg/sensitiveDataFiltering
                        </a>
                    </p>
                    <div className="securityBlock">
                        <CodeBlock
                            title=""
                            codeText={`var personallyIdentifiableDataFields = []string{"token", "authorization", "authentication", "cookie", "userid", "password", "username", "user", "key", "passcode", "pass", "auth", "authtoken", "jwt", "bearer", "clientid", "clientsecret", "redirecturi", "phonenumber", "zip", "zipcode", "address", "country", "firstname", "lastname", "middlename", "fname", "lname", "birthdate"}`}
                            copyRef={personallyIdentifiableDataFields}
                            textColor="default"
                            customStyle={{
                                fontSize: "1.2rem",
                                lineHeight: "1.5",
                            }}
                        />
                    </div>
                    <br />
                    <div className="securityBlock">
                        <h2>{pageData['defaultKeywords']}</h2>
                        <p>
                            {pageData['toRemove']}
                        </p>
                    </div>
                    <div className="securityBlock">
                        <h2>{pageData['redactSensitive']}</h2>
                        <p>
                            {pageData['youCanFilter']}
                        </p>
                    </div>
                    <div className="securityBlock">
                        <h2>{pageData['examples']}</h2>
                        <CodeBlock
                            title=""
                            codeText='./mizu tap ".*" -r <regex>'
                            copyRef={mizuSecurityTapRef}
                            textColor="default"
                        />
                        <p className="securityExamplesP">
                            {pageData['useMultiple']}
                        </p>
                        <CodeBlock
                            title=""
                            codeText='mizu tap catalo -r "redact this pattern" -r "and also this (.*) pattern"'
                            copyRef={mizuSecurityTapRedactRef}
                            textColor="default"
                        />
                    </div>
                </Card>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {ne: "home.md"}}) {
    nodes {
      frontmatter {
        infoH2
        infoH2USubheader
        textDescription
        textLowerDescription
        buttonLabel
        simpleAndPowerful
        cli
        realTime
        http
        requests
        rest
        and
        grpc
        apiCalls
        featureNoInstallation
        featureOnPremiss
        mac
        linux
        notes
        youShouldHave
        kubectl
        configuredToRun
        checksum
        releases
        page
        toSee
        standalone
        example
        runningPods
        theAboveCommand
        security
        when
        mizu
        tapsData
        pii
        makeSure
        willRedact
        personallyIdentifiableDataFields
        varLocated
        constsGo
        fileInTheFolder
        defaultKeywords
        toRemove
        redactSensitive
        youCanFilter
        examples
        useMultiple
      }
    }
  }
}
`;