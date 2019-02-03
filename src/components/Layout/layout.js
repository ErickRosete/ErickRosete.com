import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      library.add([faFacebook, faLinkedin]);

      return (
        <div className="layout">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </div>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
