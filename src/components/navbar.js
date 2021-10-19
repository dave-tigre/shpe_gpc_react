// Navbar.js
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  navbarDark,
  navLink,
  navDropdownDark,
  navLogoContent,
  navLogoList,
  navFontawesome,
} from "./navbar.module.css";
import { Link } from "gatsby";
import logoImage from "../images/shpe_logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/font-awesome";
import { Container } from "react-bootstrap";

const BootstrapNavbar = () => {
  return (
    (
      <Navbar expand="lg" variant='dark' style={{backgroundColor:'#001f5b'}} >
        <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logoImage}
              width="250"
              height="40"
              className="d-inline-block align-top"
              alt="SHPE Logo"
            />
          </Link>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/">Home</Nav.Link>
              <Nav.Link as={Link} href="/events">Events</Nav.Link>
              <NavDropdown
                title="About Us"
              >
                <NavDropdown.Item as={Link} href="/history">
                  History
                </NavDropdown.Item>
                <NavDropdown.Item  as={Link} href="/board-of-directors">
                  Board Of Directors
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/our-mission">
                  Our Mission
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} href="/membership">Membership</Nav.Link>
              <Nav.Link as={Link} href="/sponsor">Sponsors</Nav.Link>
            </Nav>
            <div style={{ float: "right", height:"100%" }}>
              <div className='row'>
              <div className='col'>
                  <a
                  href="https://linktr.ee/SHPEGPC"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={["fas", "link"]}
                    size="lg"
                    className={navFontawesome}
                  />
                </a>
                </div>
                <div className='col'>
                  <a
                  href="mailto: gpc.shpe@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    size="lg"
                    className={navFontawesome}
                  />
                </a>
                </div>
                <div className='col'>
                  <a
                  href="https://www.linkedin.com/company/shpe-gpc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    size="lg"
                    className={navFontawesome}
                  />
                </a>
                </div>
                <div className='col'>
                <a
                href="https://www.instagram.com/shpegpc/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    size="lg"
                    className={navFontawesome}
                  />
                </a>
                </div>
                <div className='col'>
                  <a
                  href="https://www.facebook.com/groups/shpegpc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    size="lg"
                    className={navFontawesome}
                  />
                </a>
                </div>
              </div>
        </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
};

export default BootstrapNavbar;
