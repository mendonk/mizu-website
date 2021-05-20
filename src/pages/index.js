import * as React from "react";
import Layout from "../../components/layout";
import "./index.css";
import GetYourMizu from "../../src/images/getYourMizu.svg";
import GithubIcon from "../images/btnGithubIcon.svg";
import MainLogo from "../images/mainlogo.png";
import MainIMG from "../images/mainImg.png";
import MizuFooterLogo from "../images/MizuFooterLogo.svg";
import SlackFooter from "../images/SlackFooter.svg";
import TwitterFooter from "../images/TwitterFooter.svg";
import GithubFooter from "../images/GithubFooter.svg";

const IndexPage = () => {
  return (
    <Layout>
      <section className="mainWrapper">
        <div className="wrapper containerWidth">
          <div className="infoWrapper">
            <h2>Consectetur</h2>
            <h2>adipiscing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              maecenas massa lacinia consectetur amet mattis eget habitant.
              Bibendum felis
            </p>
            <button className="btnHome">
              Lorem Ipsum&nbsp;&nbsp;&nbsp;&nbsp;
              <img className="githubIcon" src={GithubIcon} />
            </button>
          </div>
          <div className="mainLogoWrapper">
            <img className="mainLogo" src={MainIMG} />
          </div>
        </div>
      </section>
      <section className="starting">
        <div className="startingWrap">
          <div className="startingContainer">
            <h2>Starting</h2>
          </div>
          <div className="startingContainer">
            <span className="txtGetMizu">
              Get your{" "}
              <img src={GetYourMizu} alt="Logo" className="getYourMizuIMG" />
            </span>
          </div>
          <div className="singleBlock">
            <div className="txtColumn">
              <h4>For Mac</h4>
            </div>
            <div className="codeBlock">
              <code>
                curl -O https://static.up9.com/mizu/main/darwin.amd64/mizu &&
                chmod 755 ./mizu
              </code>
            </div>
          </div>
          <div className="singleBlock">
            <div className="txtColumn">
              <h4>For Linux</h4>
            </div>
            <div className="codeBlock">
              <code>
                curl -O https://static.up9.com/mizu/main/linux.amd64/mizu &&
                chmod 755 ./mizu
              </code>
            </div>
          </div>
          <div className="startingContainer runMizuTXTWrap">
            <span className="RunMizu" style={{ display: "flex" }}>
              Run&nbsp;
              <img src={GetYourMizu} alt="Logo" className="RunMizuIMG" />
              &nbsp;& supply Kubernetes
            </span>
            <span className="RunMizu" style={{ marginTop: 0 }}>
              pod name to tap
            </span>
          </div>
          <div className="singleBlock">
            <div className="txtColumn">
              <h4>Example</h4>
            </div>
            <div className="codeBlock">
              <pre>mizu tap podname -n namespace</pre>
            </div>
          </div>
          <h3 className="txtNotes">Notes</h3>
          <div className="notes">
            <p className="pNotes">
              You should have kubectl configured to run against your Kubernetes
              cluster. <br />
              Namespace is required in case the pod is in a different namespace
              than the default one. <br /> After mizu starts and successfully
              connects to the specified pod, a local web interface <br /> will
              become available at http://localhost:8899/
            </p>
          </div>
          <button className="btnHome" style={{ marginTop: "80px" }}>
            Get the Code&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="githubIcon" src={GithubIcon} />
          </button>
        </div>
      </section>
      <section className="keyFeatures">
        <div className="keyFeaturesWrap containerWidth">
          <h1>Key Features</h1>
        </div>
        <div className="featuresInfo containerWidth">
          <div className="featureLogo">
            <img className="mainLogo" src={MainLogo} />
          </div>
          <div className="featureDetails">
            <ul>
              <li>
                <div style={{ backgroundColor: "#205cf5" }} />
                Simple and powerful <b>CLI</b>
              </li>
              <li>
                <div style={{ backgroundColor: "#F7B202" }} />
                No installation required
              </li>
              <li>
                <div style={{ backgroundColor: "#DB2156" }} />
                Decodes and presents any&nbsp;<b>HTTP</b>&nbsp;requests,&nbsp;
                <b>REST</b>&nbsp;and&nbsp;
                <b>gRPC API</b>&nbsp;calls
              </li>
              <li>
                <div style={{ backgroundColor: "#27AE60" }} />
                Local webapp that present traffic in real time
              </li>
              <li>
                <div style={{ backgroundColor: "#0C0B1A" }} />
                Works completely on premises (on-prem)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="footerLogo">
          <img src={MizuFooterLogo} />
        </div>
        <div className="footerIcons">
          <img className="" src={SlackFooter} />
          <img className="" src={TwitterFooter} />
          <img className="" src={GithubFooter} />
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
