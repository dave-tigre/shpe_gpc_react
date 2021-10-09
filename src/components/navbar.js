// Navbar.js
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  navbar,
  navbarDark,
  navLink,
  navDropdownDark,
  navDropdownLink,
  navLogoContent,
  navLogoList,
  navFontawesome,
} from "./navbar.module.css";
import { Link } from "gatsby";
import logoImage from "../images/shpe_logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/font-awesome";

const BootstrapNavbar = () => {
  return (
    navbar,
    (
      <Navbar
        className={navbarDark}
        variant={navbarDark}
        expand="lg"
        fixed="top"
      >
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

        <Nav className="me-auto">
          <Link to="/" className={navLink}>
            Home
          </Link>
          <Link to="/events" className={navLink}>
            Events
          </Link>
          <NavDropdown
            title={<span style={{ color: "white" }}>About Us</span>}
            id={navDropdownDark}
            variant={navDropdownDark}
            menuVariant={navDropdownDark}
          >
            <NavDropdown.Item as={Link} href="/history">
              History
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/board_of_directors">
              Board Of Directors
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/our_mission">
              Our Mission
            </NavDropdown.Item>
          </NavDropdown>
          <Link to="/membership" className={navLink}>
            Membership
          </Link>
          <Link to="/sponsor" className={navLink}>
            Sponsors
          </Link>
        </Nav>
        <div style={{ float: "right" }}>
          <ul className={navLogoList}>
            <li className={navLogoContent}>
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
            </li>
            <li className={navLogoContent}>
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
            </li>
            <li className={navLogoContent}>
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
            </li>
            <li className={navLogoContent}>
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
            </li>
          </ul>
        </div>
      </Navbar>
    )
  );
};

export default BootstrapNavbar;
