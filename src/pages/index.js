import * as React from "react";
import Layout from "../../components/layout";
import "./index.css";
import GithubIcon from "../images/githubicon.svg";
import MainLogo from "../images/mainlogo.svg";

const IndexPage = () => {
  return (
    <Layout>
      <div className="mainWrapper">
        <div className="wrapper">
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
            <img className="mainLogo" src={MainLogo} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
