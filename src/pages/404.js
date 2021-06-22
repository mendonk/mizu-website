import * as React from "react";
import { Link } from "gatsby";
import Header from "../../components/header";

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};

const paragraphStyles = {
    marginBottom: 48,
};
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
};

// markup
const NotFoundPage = () => {
    return (
        <>
            <Header siteTitle={`Mizu - Not Found`} />
            <div className="notFound">
                <div className="notFoundContainer">
                    <div className="notFoundInfo">
                        <h1>Page not found</h1>
                        <p>
                            Sorry 😔 we couldn’t find what you were <br />
                            looking for.
                        </p>
                        <a
                            href="/"
                            className="btnHome"
                            style={{ width: "150px", padding: "15px 10px" }}
                        >
                            Go Home
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
