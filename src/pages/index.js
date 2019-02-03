import React from "react";
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout";
// import Image from "../components/image"
import SEO from "../components/seo";
import "./index.css";

const IndexPage = () => (
  <Layout>
    <div className="index">
      <SEO
        title="Home"
        keywords={[
          `gatsby`,
          `application`,
          `react`,
          `software`,
          `portfolio`,
          `Erick Rosete`
        ]}
      />
      <h1 className="index__title">Site under Construction</h1>
      <p style={{ textAlign: "center", fontSize: "large" }}>
        Have any question or request?{" "}
        <a href="mailto:erickrosetebeas@hotmail.com" target="_top">
          Contact me!
        </a>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
