// Navbar.js
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components"
import { Container } from 'react-layout-components';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import Image from "react-bootstrap/Image"
import './navbar.module.css'
import { Link } from "gatsby"
import logoImage from "../../images/shpe_logo2.png"



const BootstrapNavbar = () => {
  return (
    
    <Navbar className ="nav" expand="lg" fixed="top" >
          <Container>
          <Navbar.Brand href="/">
            <img
              src={logoImage}
              width="250"
              height="40"
              className="d-inline-block align-top"
              alt="SHPE Logo"
            />
          </Navbar.Brand>
        </Container>
        <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item href="/history">History</NavDropdown.Item>
            <NavDropdown.Item href="/board_of_directors">Board of Directors</NavDropdown.Item>
            <NavDropdown.Item href="/our_mission">Our Mission</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/membership">Membership</Nav.Link>
            <Nav.Link href="/sponsor">Sponsors</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default BootstrapNavbar