import * as React from "react";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle={`Mizu`} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
