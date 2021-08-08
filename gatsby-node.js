exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: "/mizu-website",
        toPath: "/",
        isPermanent: true,
    });
    createRedirect({
        fromPath: "/docs",
        toPath: "https://up9.com/docs",
        isPermanent: true,
    });
};
