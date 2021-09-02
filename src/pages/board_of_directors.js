import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-layout-components';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { graphql } from 'gatsby'
import BootstrapCard from "../components/card"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' // highlight-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';
import { Link } from "gatsby"

const board_map = new Map();

const BoardOfDirectorsPage = ({ data }) => {
  console.log(data.allMdx.nodes.map);
  return (
    <Layout pageTitle="Board Of Directors">
      <h1 className="text-center">2021 Board of Directors</h1>
      <Row xs={1} md={4} className="g-4">
        {
            data.allMdx.nodes.map((node) => (
              <Col>
                <BootstrapCard imageSource = {node.frontmatter.image} memberTitle={node.frontmatter.title} memberName={node.frontmatter.name}>
                  <Container>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" /> 
                    <a href={node.frontmatter.linkedin} style={{marginLeft: 1 + 'em'}}>{node.frontmatter.name}</a>
                  </Container>
                </BootstrapCard>
              </Col>
            ))
        }
      </Row>

    </Layout>
  )
}

// graphql querys need to be done outside of page component
export const query = graphql`
query aQuery {
  allMdx(
    filter: {frontmatter: {name: {ne: null}}}
    sort: {fields: frontmatter___index}
  ) {
    nodes {
      frontmatter {
        image
        index
        linkedin
        name
        title
      }
      body
      id
      slug
    }
  }
}
`


export default BoardOfDirectorsPage