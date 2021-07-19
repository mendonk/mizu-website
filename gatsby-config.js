module.exports = {
    siteMetadata: {
        title: "mizu",
    },
    flags: {
        THE_FLAG: false,
        PARALLEL_SOURCING: false,
        FUNCTIONS: false,
        FAST_DEV: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
        PRESERVE_WEBPACK_CACHE: true,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["G-ZKZE18RLGM"],
                pluginConfig: {
                    head: true,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docs`,
                path: `${__dirname}/src/docs/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                footnotes: true,
                gfm: true,
                plugins: [
                    {
                        resolve: "gatsby-remark-prismjs",
                        options: {
                            aliases: {
                                es6: "js",
                            },
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/icon.png",
                crossOrigin: `use-credentials`,
            },
        },
        `gatsby-plugin-client-side-redirect`,
    ],
};
