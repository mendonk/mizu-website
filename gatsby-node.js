exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: "/docs",
        toPath: "https://up9.com/docs",
        isPermanent: true,
    });
};
