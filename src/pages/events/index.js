import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Card from "react-bootstrap/Card";


const EventPage = ({ data }) => {

  const today = new Date().getTime();
  console.log(today);
  const pastEvents = [];
  const upcomingEvents = [];

  data.allMdx.nodes.forEach(node => {
    var eventDate = new Date(node.frontmatter.date);
    var image = getImage(node.frontmatter.hero_image)
    console.log(eventDate.getTime());
    if (eventDate.getTime() < today) {
      
      pastEvents.push([node, image]);  
    }
    else {
      upcomingEvents.push([node, image]);
    }
  }
  )
  return (
    <Layout pageTitle="Events">
        <h2>Upcoming Events</h2>
        {
        upcomingEvents.map((nodeA) => (
          <article key={nodeA[0].id}>
            <Card>
              <Card.Body>
                <Card.Title>{nodeA[0].frontmatter.title}</Card.Title>
                <Card.Subtitle>{nodeA[0].frontmatter.date}</Card.Subtitle>
                <GatsbyImage
                  image={nodeA[1]}
                  alt={nodeA[0].frontmatter.hero_image_alt}
                  width={100}
                />
              </Card.Body>
            </Card>
          </article>
        ))
        }
        <h2>Past Events</h2>
        {
        pastEvents.map((nodeA) => (
          <article key={nodeA[0].id}>
            <Card>
              <Card.Body>
                <Card.Title>{nodeA[0].frontmatter.title}</Card.Title>
                <Card.Subtitle>{nodeA[0].frontmatter.date}</Card.Subtitle>
                <GatsbyImage
                  image={nodeA[1]}
                  alt={nodeA[0].frontmatter.hero_image_alt}
                />
              </Card.Body>
            </Card>
          </article>
        ))
        }
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