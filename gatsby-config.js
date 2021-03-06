module.exports = {
    siteMetadata: {
        title: "mizu",
    },
    plugins: [
        'react-helmet',
        'gatsby-transformer-remark',
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-client-side-redirect`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "data",
                path: `./src/data/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/icon.png",
                crossOrigin: `use-credentials`,
            },
        },
        {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
            trackingIds: ["G-ZKZE18RLGM"],
            pluginConfig: {
              head: true,
            },
          },
        },
    ],
    flags: {
        THE_FLAG: false,
        PARALLEL_SOURCING: false,
        FUNCTIONS: false,
        FAST_DEV: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
        PRESERVE_WEBPACK_CACHE: true,
    },
};
