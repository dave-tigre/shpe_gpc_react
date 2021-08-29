import * as React from 'react'
import Navbar from './Navbar/Navbar'
import { Box, Container } from 'react-layout-components';
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const pathPrefix = "shpe_gpc_react/"
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <Container>
      <Navbar />
      <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <main>
          {/* <h1 className={heading}>{pageTitle}</h1> */}
          {children}
        </main>
      </div>
    </Container>
    
  )
}

export default Layout