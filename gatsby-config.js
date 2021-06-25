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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "G-ZKZE18RLGM",
                head: true,
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/icon.png",
                crossOrigin: `use-credentials`,
            },
        },
        `react-helmet`,
        `gatsby-plugin-client-side-redirect`,
    ],
};
