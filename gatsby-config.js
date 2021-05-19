module.exports = {
  siteMetadata: {
    title: "mizu",
  },
  plugins: [
    `react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
