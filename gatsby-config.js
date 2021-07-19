module.exports = {
    siteMetadata: {
        title: "mizu",
    },
    plugins: [
        `react-helmet`,
        {
            resolve: `gatsby-transformer-json`,
            options: {
                typeName: "Json",
            },
        },
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
