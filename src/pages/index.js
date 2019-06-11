import React from "react";
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import banner300w from "../images/index/banner-300w.jpg";
import banner600w from "../images/index/banner-600w.jpg";
import banner1200w from "../images/index/banner-1200w.jpg";
import banner2500w from "../images/index/banner-2500w.jpg";
import banner5000w from "../images/index/banner-5000w.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from "../images/index/about.jpg"
import robot from "../images/index/robot.jpg";

import { Container, Row, Col } from "react-bootstrap"


import "./index.css";

const transparent = "#00000000";
const mainColor = "#00a5e9";
class IndexPage extends React.Component {
  state = {
    navbarColor: transparent
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      if (this.state.navbarColor !== mainColor) {
        this.setState({
          navbarColor: mainColor
        });
      }
    } else {
      if (this.state.navbarColor !== transparent) {
        this.setState({
          navbarColor: transparent
        });
      }
    }
  };

  render() {
    return (
      <Layout mainMargin={0} navbarColor={this.state.navbarColor}>
        <div className="index">
          <SEO
            title="Home"
            keywords={[
              `software`,
              'robotics',
              `portfolio`,
              `Erick Rosete`
            ]}
          />
          <div className="index-banner">
            <img
              className="index-banner-img"
              src={banner1200w}
              srcSet={`${banner300w} 300w, ${banner600w} 600w, ${banner1200w} 1200w, ${banner2500w} 2500w, ${banner5000w} 5000w`}
              alt="My workstation"
            />
            <div className="index-banner-info">
              <h1>Erick Rosete</h1>
              <h2>Robotics Software Engineer</h2>
              <hr className="main-line" />
              <div className="social-networks">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ErickRosete"
                >
                  <FontAwesomeIcon icon={["fab", "github-square"]} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/erickrosete/"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </div>
            </div>
          </div>

          <div className="index-about">
            <h1>About me</h1>
            <div className="index-about-info">
              <div>
                <img src={about} alt="Erick Rosete" />
              </div>
              <div className="index-about-text">
                <p>Versatile mechatronics engineer, capable of solving complex problems in a fast-paced environment, committed to the highest levels of professional and personal excellence, willing to develop professionally, looking for continuous learning and improvement.</p>
                <p>Interested in Robotics, Automation and Programming.</p>
              </div>
            </div>
          </div>

          <div className="index-projects">
            <p>I like to work in different things, take a look</p>
            <h1>Projects</h1>
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <div className="project-card">
                    <img src={robot} alt="placeholder" />
                    <div className="sec-cover"></div>
                    <h2>Robotics</h2>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="project-card">
                    <img src={robot} alt="placeholder" />
                    <div className="main-cover"></div>
                    <h2>Web & mobile</h2>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="project-card">
                    <img src={robot} alt="placeholder" />
                    <div className="main-cover"></div>
                    <h2>Games</h2>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="project-card">
                    <img src={robot} alt="placeholder" />
                    <div className="sec-cover"></div>
                    <h2>AI</h2>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <hr></hr>
          <h1 className="index__title">Site under Construction</h1>
          <p style={{ textAlign: "center" }}>
            Have any question or request?{" "}
            <a href="mailto:erickrosetebeas@hotmail.com" target="_top">
              Contact me!
          </a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage;
