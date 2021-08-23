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
        <script type="text/javascript">
            {`
                            _linkedin_partner_id = "3855825";
                            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                            `}
        </script>
        <script type="text/javscript">
            {`
                            (function(l) {
                                if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                                window.lintrk.q=[]}
                                var s = document.getElementsByTagName("script")[0];
                                var b = document.createElement("script");
                                b.type = "text/javascript";b.async = true;
                                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                                s.parentNode.insertBefore(b, s);})(window.lintrk);
                        `}
        </script>
        <noscript>
            {`
                        <img
                            height="1"
                            width="1"
                            style="display:none;"
                            alt=""
                            src="https://px.ads.linkedin.com/collect/?pid=3855825&fmt=gif"
                        />
                        `}
        </noscript>
    </Helmet>
);

export default MetaTags;
