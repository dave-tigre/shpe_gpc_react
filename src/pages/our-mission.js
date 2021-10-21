import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-layout-components'
import { ListGroup } from 'react-bootstrap'

const OurMissionPage = () => {
  return (
    <Layout pageTitle="Our Mission">
      <Container style={{textAlign:'center'}}>
          <h1>Mission</h1>
          <p>SHPE's mission is to promote the development of Hispanics in engineering, science and other technical professions to achieve educational excellence, economic opportunity, and social equity. 
              We fulfill this Mission by increasing educational opportunities, promoting professional and personal growth and reinforcing our reputation as a vital Hispanic organization. 
              We also carry out our social responsibility to be involved in education, business and enhancing pride within our organization.</p>
              <div className='row' >
                <div className='col' >
                  <h5>We are brought together by:</h5>
                  <ListGroup  variant='flush'>
                      <ListGroup.Item>Heritage</ListGroup.Item>
                      <ListGroup.Item>Social responsibility</ListGroup.Item>
                      <ListGroup.Item>Desire to improve the equality of all people through the use of science and technology</ListGroup.Item>
                  </ListGroup>
                </div>
                <div className='col' >
                  <h5>We value excellence in:</h5>
                  <ListGroup variant='flush'>
                      <ListGroup.Item>Education</ListGroup.Item>
                      <ListGroup.Item>Professional pursuit</ListGroup.Item>
                      <ListGroup.Item>Leadership</ListGroup.Item>
                  </ListGroup>
                </div>
                <div className='col' >
                <h5>We obtain excellence through:</h5>
                <ListGroup variant='flush'>
                      <ListGroup.Item>Integrity</ListGroup.Item>
                      <ListGroup.Item>Empowerment</ListGroup.Item>
                      <ListGroup.Item>Achievement</ListGroup.Item>
                      <ListGroup.Item>Diversity</ListGroup.Item>
                      <ListGroup.Item>Continuous Improvement</ListGroup.Item>
                  </ListGroup>
                </div>
            </div>
        <h1>The Pillars of SHPE</h1>
        
        <div style={{textAlign:'center'}}>
          
        <div className='row'>
          <div className='col'>
            <h6>Professional Development</h6>
            <StaticImage
              alt="Trivia Night"
              src="../images/pillars-of-shpe/professionalDevelopment.png"
              className="img-fluid"
              placeholder="blurred"
              height={200}
            />
            <p> Activities geared at the soft skills and/or technical skills breadth requirement of the members' current workforce competencies.</p>
          </div>
          <div className='col'>
          <h6>Leadership Development</h6>
            <StaticImage
              alt="Trivia Night"
              src="../images/pillars-of-shpe/leadershipDevelopment.png"
              className="img-fluid"
              placeholder="blurred"
              height={200}
            />
          <p> Activities geared towards developing leadership skills of members, ensuring a solid foundation of leaders within the executive board and the successful transition of officers.</p>
          </div>
          <div className='col'>
          <h6>Chapter Development</h6>
            <StaticImage
              alt="Trivia Night"
              src="../images/pillars-of-shpe/chapterDevelopment.png"
              className="img-fluid"
              placeholder="blurred"
              height={200}
            />
          <p>Activities promoting recruitment/retention of members, promote a solid foundation for the chapter itself in terms of funding, presence and/or influence in the local community.</p>
          </div>
          <div className='col'>
          <h6>Community & Outreach Service</h6>
            <StaticImage
              alt="Trivia Night"
              src="../images/pillars-of-shpe/communityOutreach.png"
              className="img-fluid"
              placeholder="blurred"
              height={200}
            />
          <p>Activities specifically promoting STEM awareness in the K-12 community and/or supporting the local community.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <h6>Student & Professional Chapter Interaction</h6>
            <StaticImage
              alt="Trivia Night"
              src="../images/pillars-of-shpe/chapterInteraction.png"
              className="img-fluid"
              placeholder="blurred"
              height={200}
            />
          <p>Activities promoting professional and local student SHPE chapter interaction and mentorship by the SHPE professional chapter.</p>
          </div>
          <div className='col'>
          <h6>Career Development</h6>
            <StaticImage
              alt="Trivia Night"
              src="../images/pillars-of-shpe/careerDevelopment.png"
              className="img-fluid"
              placeholder="blurred"
              height={200}
            />
          <p>Activities geared towards the career and management development with the specific intent of upward mobility and/or advancement within the members' career.</p>
          </div>
        </div>
      </div>
      </Container>
    </Layout>
  )
}

export default OurMissionPage