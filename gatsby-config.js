module.exports = {
    siteMetadata: {
        title: "mizu",
    },
    plugins: [
        'react-helmet',
        'gatsby-transformer-remark',
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
    ],
};
