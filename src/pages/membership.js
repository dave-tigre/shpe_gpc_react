import * as React from 'react'
import Layout from '../components/layout'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Container } from 'react-layout-components';
import { Button } from 'react-bootstrap';
import '../utils/font-awesome';
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const cardTitleStyle = {textAlign:'center',};
const MembershipPage = ({data}) => {
    return (
        <Layout pageTitle="Membership">
            <Container style={{textAlign:'center'}}>
            <h1>SHPE For Everyone</h1>
            <p>
                Our chapter and our local student chapters succeed with the support of the National Society of Hispanic Professional Engineers. To take advantage of all SHPE has to offer, become a national member!
            </p>
            <a href="https://www.shpe.org/membership" target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
            SHPE National Membership
            </Button>
            </a>
            <p></p>
            <h1>SHPE For Professionals</h1>
            <p>
                Professional members of SHPE utilize SHPE resources to find greater success in their careers and beyond. Whether a member is an entry-level engineer or an experienced executive, professional development options are available to meet that member’s needs. Professional members also have tremendous opportunities to network with colleagues and corporate partners, take on SHPE chapter leadership positions, and give back to their communities through various outreach initiatives.
            </p>
            <p>
                Become a part of our chapter by contacting us at   
                <a
                  style={{marginLeft:'0.5em'}}
                  href="mailto: gpc.shpe@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                     gpc.shpe@gmail.com
                </a>
            </p>
            <h1>SHPE For Students</h1>
            <p>
                As the source for students, SHPE opens up a world of opportunity. Scholarships, leadership development, internship and job connections, community outreach, mentoring, networking — all are benefits provided by SHPE to student members. In a competitive, global environment, SHPE student members are ready for success when they graduate. The SHPE - Greater Philadelphia Chapter is proud to support our local student chapters.
            </p>
            <h2>Our Local Student Chapters</h2>
            <Row xs={1} md={4} className="g-4">
        {
          data.allMdx.nodes.map((node) => {
            const heroImage = getImage(node.frontmatter.hero_image);
            const mailTo = "mailto: ";
            return (
            <Col> 
                <Container style={{textAlign:'center'}}>
                    <GatsbyImage image={heroImage} alt={node.frontmatter.hero_image_alt}/>
                    <p style={{textAlign:'center',marginTop:'5px', marginBottom:'0'}} >{node.frontmatter.name}</p>
                    <a 
                    href={mailTo.concat(node.frontmatter.email)}
                    target="_blank"
                    rel="noopener noreferrer">
                        {node.frontmatter.email}
                    </a>
                    <p></p>
                </Container>
              </Col>
            )
          })
        }
      </Row>
        </Container>
        </Layout>

    )
}

export const query = graphql`
query {
  allMdx(
    filter: {frontmatter: {type: {eq: "chapter"}}}
    sort: {fields: frontmatter___name, order: ASC}
  ) {
    nodes {
      frontmatter {
        name
        email
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(height:100)
          }
        }
      }
      id
      slug
    }
  }
}
`



export default MembershipPage
