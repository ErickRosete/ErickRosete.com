import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import banner300w from "../images/index/banner-300w.jpg"
import banner600w from "../images/index/banner-600w.jpg"
import banner1200w from "../images/index/banner-1200w.jpg"
import banner2500w from "../images/index/banner-2500w.jpg"
import banner5000w from "../images/index/banner-5000w.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import about from "../images/index/about.jpg"
import robot from "../images/index/robot.png"
import machineLearning from "../images/index/machine-learning.png"
import cloud from "../images/index/cloud.png"
import webDevelopment from "../images/index/web-development.png"

import { Container, Row, Col } from "react-bootstrap"

import "./index.css"

const transparent = "#00000000"
const mainColor = "#00a5e9"
class IndexPage extends React.Component {
  state = {
    navbarColor: transparent,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      if (this.state.navbarColor !== mainColor) {
        this.setState({
          navbarColor: mainColor,
        })
      }
    } else {
      if (this.state.navbarColor !== transparent) {
        this.setState({
          navbarColor: transparent,
        })
      }
    }
  }

  render() {
    return (
      <Layout mainMargin={0} navbarColor={this.state.navbarColor}>
        <div className="index">
          <Seo
            title="Home"
            keywords={[
              `software`,
              `Machine Learning`,
              `AI`,
              `Web Development`,
              "robotics",
              `portfolio`,
              `Erick Rosete`,
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
              <h2>Machine Learning Engineer</h2>
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

          <section className="section index-about">
            <h1>About me</h1>
            <div className="index-about-info">
              <div className="img-container">
                <img src={about} alt="Erick Rosete" />
              </div>
              <div className="index-about-text">
                <p>
                  I’m a machine learning (ML) engineer with a strong background
                  in computer science and rigorous training in artificial
                  intelligence. I have experience as a full stack developer that
                  companies find very valuable in combination with my expertise
                  in data science, deep learning, and computer vision (CV). I
                  help companies develop and deploy professional AI solutions
                  solving real-world industry problems to help them meet their
                  business objectives. I have helped develop solutions for
                  industry leaders like Honeywell, Gulfstream Aerospace, Samsung
                  and Bosch. I mostly work as a remote consultant and developer.
                  I can work for companies anywhere in the world, including the
                  USA.
                </p>
              </div>
            </div>
          </section>

          <div className="index-projects">
            <section className="section">
              <p>I like to work in different things, take a look</p>
              <h1>Projects</h1>
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <Link
                      to="/machine-learning"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="project-card">
                        <img src={machineLearning} alt="machine-learning" />
                        <div className="main-cover"></div>
                        <h2>Machine Learning</h2>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={12} md={6}>
                    <Link to="/robotics" style={{ textDecoration: "none" }}>
                      <div className="project-card">
                        <img src={robot} alt="robotics" />
                        <div className="sec-cover"></div>
                        <h2>Robotics</h2>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={12} md={6}>
                    <Link
                      to="/cloud-computing"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="project-card">
                        <img src={cloud} alt="cloud-computing" />
                        <div className="sec-cover"></div>
                        <h2>Cloud computing</h2>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={12} md={6}>
                    <Link
                      to="/software-development"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="project-card">
                        <img src={webDevelopment} alt="web-development" />
                        <div className="main-cover"></div>
                        <h2>Software Development</h2>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>

          <hr></hr>
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

export default IndexPage
