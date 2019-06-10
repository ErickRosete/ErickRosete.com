import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Navigation from "./Navigation/Navigation";
// import Footer from "./footer";
import "./layout.css";


const Layout = ({ children, navbarColor, mainMargin }) => (
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
      library.add([faFacebook, faLinkedin, faGithubSquare]);

      return (
        <div className="layout">
          <Navigation navbarColor={navbarColor} siteTitle={data.site.siteMetadata.title} />
          <main className="main-content" style={{ margin: mainMargin }}>{children}</main>
          {/* <Footer /> */}
        </div>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
