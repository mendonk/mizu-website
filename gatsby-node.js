exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: "/mizu-website",
        toPath: "/",
        isPermanent: true,
    });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const result = await graphql(`
        {
            allFile(
                filter: {
                    sourceInstanceName: { eq: "docs" }
                    extension: { eq: "md" }
                }
            ) {
                edges {
                    node {
                        childMarkdownRemark {
                            html
                            fileAbsolutePath
                            frontmatter {
                                slug
                                date
                                title
                                author
                                subtitle
                            }
                        }
                    }
                }
            }
        }
    `);

    const { edges } = result.data.allFile;

    const sidebarData = [];

    edges.forEach((doc) => {
        const node = doc.node.childMarkdownRemark;
        const groupingName = node.fileAbsolutePath.split("docs/")[1].split("_");

        const groupObject = {
            number: Number(groupingName[0]),
            name: groupingName[1].split("/")[0],
            slug: node.frontmatter.slug,
            title: node.frontmatter.title,
        };

        sidebarData.push(groupObject);
    });

    sidebarData.sort((a, b) => {
        return a.number - b.number;
    });

    const groupByName = sidebarData.reduce((r, a) => {
        r[`${a.number}_${a.name}`] = r[`${a.number}_${a.name}`] || [];
        r[`${a.number}_${a.name}`].push({ slug: a.slug, title: a.title });
        return r;
    }, Object.create(null));

    sidebarData.forEach((doc) => {
        const slug = doc.slug === "index" ? "docs" : `docs/${doc.slug}`;
        createPage({
            path: `/${slug}`,
            component: require.resolve("./src/templates/docs/"),
            context: {
                sidebarData: groupByName,
                slug: doc.slug,
            },
        });
    });
};
