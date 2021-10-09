import * as React from "react";
import BootstrapNavbar from "./navbar";
import { Container } from "react-layout-components";
import { useStaticQuery, graphql } from "gatsby";
import { pageContainer, container } from "./layout.module.css";
import Button from "react-bootstrap/Button";
import {SSRProvider} from '@react-aria/ssr';
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
    <SSRProvider>
      <Container className={pageContainer}>
            <div style={{ marginBottom: "50px" }}>
              <BootstrapNavbar />
            </div>
            <div>
              <title>
                {pageTitle} | {data.site.siteMetadata.title}
              </title>
              <main className={container}>
                <div></div>

                {children}
              </main>

              <footer id="footer">
                <a
                  href="https://forms.gle/sRWWVXZZgMMjayPZ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Click Here to Subscribe To Our News Letter!</Button>
                </a>
              </footer>
            </div>
      </Container>
    </SSRProvider>
    
  );
};

export default Layout;
