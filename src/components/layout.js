import * as React from "react";
import BootstrapNavbar from "./navbar";
import { Container } from "react-layout-components";
import { useStaticQuery, graphql } from "gatsby";
import { container } from "./layout.module.css";
import {SSRProvider} from '@react-aria/ssr';
import SubscribeButton from "./subscription_button";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Container className='container-fluid'>
      
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
        </head>

            <div>
              <BootstrapNavbar />
            </div>
            <div>
              <title>
                {pageTitle}|{data.site.siteMetadata.title}
              </title>
              <main className={container}>
                <div></div>

                {children}
              </main>

              
            </div>
            <footer id="footer">
                <SubscribeButton />
              </footer>
      </Container>
    </SSRProvider>
    
  );
};

export default Layout;
