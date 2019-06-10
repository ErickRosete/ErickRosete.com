import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footer = () => {
  return (
    <footer>
      <span>
        ©2019, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
      <div className="social-networks">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://facebook.com/erickrosetebeas"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/erickrosete/"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </div>
    </footer>
  );
};

export default footer;
