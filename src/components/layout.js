import * as React from "react";
import BootstrapNavbar from "./Navbar/navbar";
import { Container } from "react-layout-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, heading } from "./layout.module.css";
import Footer from "./footer";

const pathPrefix = "shpe_gpc_react/";
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <div style={{ marginBottom: "50px" }}>
        <BootstrapNavbar />
      </div>

      <div className={container}>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <main>
          <div></div>

          {children}
        </main>
        
      </div>
      <Footer />

    </Container>
  );
};

export default Layout;
