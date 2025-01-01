import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import logo from "../../../images/icon.png"
import PropTypes from "prop-types"

import "./Navigation.css"

const navigation = props => {
  console.log(props)
  return (
    <header className="main-navigation">
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="md"
        variant="dark"
        style={{ backgroundColor: props.navbarColor }}
      >
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" activeClassName="active">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

navigation.propTypes = {
  siteTitle: PropTypes.string,
}

navigation.defaultProps = {
  siteTitle: ``,
}

export default navigation
