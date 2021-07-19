import React from "react";
import Layout from "../../../components/layout";
import "./docs.css";
import { graphql } from "gatsby";

export default function Docs({ data, pageContext }) {
    const { html } = data.markdownRemark;

    return (
        <Layout>
            <section className="docs">
                <div className="sidebar">
                    <input
                        type="text"
                        placeholder="Search"
                        className="searchInput"
                    />

                    {Object.keys(pageContext.sidebarData).map((key, index) => {
                        const grName = key.split("_")[1];
                        return (
                            <div key={index} className="groupDoc">
                                <h2>{grName}</h2>
                                <ul>
                                    {pageContext.sidebarData[key].map(
                                        (menu, idx) => {
                                            const slug =
                                                menu.slug === "index"
                                                    ? "/docs/"
                                                    : `/docs/${menu.slug}`;
                                            return (
                                                <li key={idx}>
                                                    <a href={slug}>
                                                        {menu.title}
                                                    </a>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="content">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query ($slug: String) {
        markdownRemark(
            frontmatter: { slug: { eq: $slug }, type: { eq: "doc" } }
        ) {
            html
            frontmatter {
                title
            }
        }
    }
`;
