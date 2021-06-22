import * as React from "react";
import { Link } from "gatsby";
import Header from "../../components/header";

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
