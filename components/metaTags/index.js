import * as React from "react";
import { Helmet } from "react-helmet";
import metaImage from "../../src/images/thumb.png";

const MetaTags = ({ description, name }) => (
    <Helmet>
        <meta name="description" content={description} />
        <meta name="image" content={metaImage} />
        <meta itemProp="name" content={name} />

        <meta name="image" property="og:image" content={metaImage} />
        <meta property="og:site_name" content={name} />
        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content={name} />
        <meta property="og:url" content="https://getmizu.io" />
        <meta
            name="description"
            property="og:description"
            content={description}
        />
        <meta
            name="twitter:card"
            property="twitter:card"
            content="summary_large_image"
        />
        <meta
            name="twitter:site"
            property="twitter:site"
            content="https://getmizu.io"
        />
        <meta name="twitter:title" property="twitter:title" content={name} />
        <meta
            name="twitter:description"
            property="twitter:description"
            content={description}
        />
        <meta
            name="twitter:image"
            content={`https://getmizu.io${metaImage}`}
            property="twitter:image"
        />
    </Helmet>
);

export default MetaTags;
