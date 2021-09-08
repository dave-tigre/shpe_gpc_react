// Navbar.js
import { Container } from "react-layout-components";
import React from "react";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import {
  nav,
  navLink,
  navDropdown,
  navDropdownLink,
} from "./navbar.module.css";
import { Link } from "gatsby";
import logoImage from "../../images/shpe_logo2.png";

const BootstrapNavbar = () => {
  return (
    <Navbar className={nav} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
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
      </Container>
      <Nav>
        <Link to="/" className={navLink}>
          Home
        </Link>
        <Link to="/events" className={navLink}>
          Events
        </Link>
        <NavDropdown
          title={<span className={navDropdown}>About Us</span>}
          id="nav-dropdown"
          menuVariant="primary"
          variant="primary"
        >
          <NavDropdown.Item href="/history">
            <Link to="/history" className={navDropdownLink}>
              History
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/board_of_directors" className={navDropdownLink}>
              Board Of Directors
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <span>
            <Link to="/our_mission" className={navDropdownLink}>
              Our Mission
            </Link>
              </span>
            
          </NavDropdown.Item>
        </NavDropdown>
        <Link to="/membership" className={navLink}>
          Membership
        </Link>
        <Link to="/sponsor" className={navLink}>
          Sponsors
        </Link>
      </Nav>
    </Navbar>
  );
};

export default BootstrapNavbar;
