import * as React from "react";
import Header from "../header";
import Footer from "../footer";
import "./layout.css";

const Layout = ({ children }) => {
    return (
        <div>
            <Header siteTitle={`Mizu`} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
