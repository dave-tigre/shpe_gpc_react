import * as React from 'react'
import Layout from '../components/layout'
import { Container } from 'react-layout-components';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Card from "react-bootstrap/Card";

const cardTitleStyle = {textAlign:'center'};
const BoardOfDirectorsPage = ({ data }) => {
  const boardArray = [];
  data.allMdx.nodes.forEach((node) => {
    var heroImage = getImage(node.frontmatter.hero_image);
    var image = (<GatsbyImage image={heroImage} alt={node.frontmatter.hero_image_alt}/>)
    if (node.frontmatter.image !== ""){
      image = (<Card.Img src={node.frontmatter.image} fluid={true} alt="Card image" />)
    }
    boardArray.push([node, image]);
  })
  
  return (
    <Layout pageTitle="Board Of Directors">
      <h1 className="text-center">2021 Board of Directors</h1>
      <Row xs={1} md={3} className="g-4">
        {
            boardArray.map((boardMember) => (
              <Col>
                <Card>
                  <Card.Body>
                    {boardMember[1]}
                    <Card.Title style={cardTitleStyle}>{boardMember[0].frontmatter.position}</Card.Title>
                    <Card.Subtitle style={cardTitleStyle}>{boardMember[0].frontmatter.name}</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <Card.Text>
                      <Container>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" /> 
                        <a href={boardMember[0].frontmatter.linkedin} style={{marginLeft: 1 + 'em'}}>{boardMember[0].frontmatter.name}</a>
                      </Container>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
        }
      </Row>

    </Layout>
  )
}

// graphql querys need to be done outside of page component
export const query = graphql`
query {
  allMdx(
    filter: {frontmatter: {type: {eq: "board"}}}
    sort: {fields: frontmatter___index, order: ASC}
  ) {
    nodes {
      frontmatter {
        position
        name
        index
        linkedin
        image
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


export default BoardOfDirectorsPage