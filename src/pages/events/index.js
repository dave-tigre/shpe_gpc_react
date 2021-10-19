import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Card from "react-bootstrap/Card";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SubscribeButton from "../../components/subscription_button";
import Calendar from '../../components/calendar';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const EventPage = ({ data }) => {

  const eventDates = [];
  const eventFlyers = [];
  data.allMdx.nodes.forEach((node) => {
    var anEventDate = new Date(node.frontmatter.date);
    eventDates.push(anEventDate);
    const image = getImage(node.frontmatter.hero_image);
    const eventName = node.frontmatter.title;
    eventFlyers.push([anEventDate,eventName,image]);
  });

  const today = new Date().getTime();
  return (
    <Layout pageTitle="Events">
      <h2 style={{textAlign:"center"}}>SHPE-GPC Events</h2>
      <Container style={{textAlign:"center"}}>
        <p style={{textAlign:"center", padding:"0px"}}>Never miss an event by subscribing to our newsletter!</p>
        <SubscribeButton/>
        <br></br>
      <Calendar eventDates={eventDates} eventFlyers={eventFlyers}/>
      </Container>
      <br></br>
      <Container>
        
        <h2>Upcoming Events</h2>
        <Row xs={1} md={3} className="g-4">
        {
          data.allMdx.nodes.map(node => {
            var eventDate = new Date(node.frontmatter.date);
            const image = getImage(node.frontmatter.hero_image)
            console.log(eventDate.getTime());
            if (eventDate.getTime() >= today) {
              
              return (
                  <Col>
                  <Card style={{height:'100%'}}>
                  <Card.Body>
                    <Card.Title>{node.frontmatter.title}</Card.Title>
                    <Card.Subtitle>{node.frontmatter.date}</Card.Subtitle>
                    <div style={{textAlign:'center'}}>
                    <GatsbyImage
                      image={image}
                      alt={node.frontmatter.hero_image_alt}
                    />
                    </div>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
                  </Col>
              ) 
            }
            else {
              return undefined;
            }
          },
          
          )
        }
        </Row>
        <h2>Past Events</h2>
        <Row xs={1} md={3} className="g-4">
        {
        data.allMdx.nodes.map(node => {
          var eventDate = new Date(node.frontmatter.date);
          const image = getImage(node.frontmatter.hero_image)
          console.log(eventDate.getTime());
          if (eventDate.getTime() < today) {
            
            return (
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>{node.frontmatter.title}</Card.Title>
                    <Card.Subtitle>{node.frontmatter.date}</Card.Subtitle>
                    <div style={{textAlign:'center'}}>
                      <GatsbyImage
                        image={image}
                        alt={node.frontmatter.hero_image_alt}
                      />
                    </div>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ) 
          }
          else {
            return undefined;
          }
        },
        
        )
        }
        </Row>
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
            gatsbyImageData(height: 200)
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