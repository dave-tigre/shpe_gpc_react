import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Card from "react-bootstrap/Card";
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Calendar from '../../components/calendar';
import { Container } from 'react-bootstrap';

const EventPage = ({ data }) => {

  const today = new Date().getTime();
  return (
    <Layout pageTitle="Events">
      <Container style={{alignItems:"center"}}>
      <Calendar/>
      </Container>
      <br></br>
      <Container>
        
        <h2>Upcoming Events</h2>
        {
          data.allMdx.nodes.map(node => {
            var eventDate = new Date(node.frontmatter.date);
            const image = getImage(node.frontmatter.hero_image)
            console.log(eventDate.getTime());
            if (eventDate.getTime() >= today) {
              
              return (
                <article key={node.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{node.frontmatter.title}</Card.Title>
                    <Card.Subtitle>{node.frontmatter.date}</Card.Subtitle>
                    <GatsbyImage
                      image={image}
                      alt={node.frontmatter.hero_image_alt}
                    />
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </article>
              ) 
            }
            else {
              return undefined;
            }
          },
          
          )
        }
        <h2>Past Events</h2>
        {
        data.allMdx.nodes.map(node => {
          var eventDate = new Date(node.frontmatter.date);
          const image = getImage(node.frontmatter.hero_image)
          console.log(eventDate.getTime());
          if (eventDate.getTime() < today) {
            
            return (
              <article key={node.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{node.frontmatter.title}</Card.Title>
                  <Card.Subtitle>{node.frontmatter.date}</Card.Subtitle>
                  <GatsbyImage
                    image={image}
                    alt={node.frontmatter.hero_image_alt}
                  />
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </article>
            ) 
          }
          else {
            return undefined;
          }
        },
        
        )
        }
        </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(
    filter: {frontmatter: {type: {eq: "event"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
      slug
    }
  }
}
`

export default EventPage