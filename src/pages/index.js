import * as React from "react";
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

import "./index.css";

const IndexPage = () => {
  return (
    <Layout>
      <section className="mainWrapper">
        <Card>
          <div className="wrapper">
            <div className="infoWrapper">
              <h2>API Traffic Viewer</h2>
              <h2>for Kubernetes</h2>
              <p>
                A simple-yet-powerful API traffic viewer for Kubernetes to help
                you troubleshoot and debug your microservices.
              </p>
              <p>Think TCPDump and Chrome Dev Tools combined.</p>
              <button className="btnHome">Quick Start</button>
            </div>
            <div className="mainLogoWrapper">
              <img className="mainLogo" src={MainIMG} alt="Main Image" />
            </div>
          </div>
        </Card>
      </section>
      <section className="keyFeatures">
        <Card>
          <h1>Key Features</h1>
        </Card>
        <Card dpFlex="dpFlex">
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
                Real time view of all <b>HTTP</b> requests, <b>REST</b> and{" "}
                <b>gRPC</b> API calls
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
      <section className="quickStart">
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
        >
          <div className="quickStartCodeContainer">
            <div className="quickStartTab">
              <span>MAC</span>
              <span>LINUX</span>
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
            <div className="exampleCommand" style={{ marginTop: "10px" }}>
              <span>
                curl -O https://static.up9.com/mizu/main/darwin.amd64/mizu &&
                chmod 755 ./mizu
              </span>
              <img src={CopyIcon} alt="Copy Icon" />
            </div>
            <div className="quickStartCodeRow">
              <h4 className="lblOfQuickStartCodeRow">Run</h4>
            </div>
            <div className="exampleCommand" style={{ marginTop: "10px" }}>
              <span>{`mizu tap <podname> -n <namespace>`}</span>
              <img src={CopyIcon} alt="Copy Icon" />
            </div>
          </div>
          <div className="quickStartCodeContainer">
            <h4 className="txtNotes">Notes</h4>
            <ul className="quickStartList">
              <li>
                You should have kubectl configured to run against your
                Kubernetes cluster.
              </li>
              <li>
                Namespace is required in case the pod is in a different
                namespace than the default one.
              </li>
              <li>
                After mizu starts and successfully connects to the specified
                pod, a local web interface will become available at
                http://localhost:8899/
              </li>
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
          <button className="btnHome" style={{ width: "auto" }}>
            Get the Code&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="githubIcon" src={GithubIcon} alt="Github Icon" />
          </button>
        </Card>
      </section>
      <section className="commandLineArguments">
        <Card>
          <h1>Command-line Arguments</h1>
        </Card>
        <Card
          dpFlex="dpFlex"
          customStyle={{
            justifyContent: "center",
            margin: "50px 0",
          }}
        >
          <span className="info">
            Usage and list of command-line arguments can be seen by running
          </span>
          &nbsp;
          <span className="info" style={{ color: "#205CF5" }}>
            mizu -h
          </span>
          &nbsp;
          <span className="info">or</span>&nbsp;
          <span className="info" style={{ color: "#205CF5" }}>
            mizu help
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
          <div className="codeBlock">
            <pre>
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
              <img src={CopyIcon} alt="Copy Icon" />
            </div>
          </div>
        </Card>
      </section>
      <section className="example">
        <Card>
          <h1>Example</h1>
        </Card>
        <Card
          dpFlex="dpFlex"
          customStyle={{
            justifyContent: "center",
            alignItems: "center",
            margin: "50px 0",
          }}
        >
          <span className="info">How to Get the &nbsp;</span>
          <span className="info" style={{ color: "#205CF5" }}>
            Pod Name
          </span>
        </Card>
        <Card
          customStyle={{
            padding: "20px",
            background: "#FFF",
          }}
        >
          <div className="exampleCommand">
            <span>kubectl get pods -A</span>
            <img src={CopyIcon} alt="Copy Icon" />
          </div>
          <div className="exampleImage">
            <img src={ExampleImage} alt="Example image" />
          </div>
          <div className="exampleCommand">
            <span>mizu tap carts-db-69d4c5864f-kg84n -n sock-shop</span>
            <img src={CopyIcon} alt="Copy Icon" />
          </div>
        </Card>
      </section>
      <footer>
        <div className="footerLogo">
          <img src={MizuFooterLogo} />
        </div>
        <div className="footerIcons">
          <img className="" src={SlackFooter} alt="Slack Icon" />
          <img className="" src={TwitterFooter} alt="Twitter Icon" />
          <img className="" src={GithubFooter} alt="Github Icon" />
        </div>
        <div className="footerCopy">
          <span>
            Built and maintained by <b>UP9</b> &copy; (2021)
          </span>
        </div>
      </footer>
    </Layout>
  );
};

export default IndexPage;
