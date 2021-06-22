exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: "/mizu-website",
        toPath: "/",
        isPermanent: true,
    });
};
