import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-layout-components';

const OurMissionPage = () => {
  return (
    <Layout pageTitle="Our Mission">
          <h1>Mission</h1>
          <p>SHPE's mission is to promote the development of Hispanics in engineering, science and other technical professions to achieve educational excellence, economic opportunity, and social equity. 
              We fulfill this Mission by increasing educational opportunities, promoting professional and personal growth and reinforcing our reputation as a vital Hispanic organization. 
              We also carry out our social responsibility to be involved in education, business and enhancing pride within our organization.</p>

              <u>We are brought together by:</u>
              <ul>
                  <li>Heritage</li>
                  <li>Social responsibility</li>
                  <li>Desire to improve the equality of all people through the use of science and technology</li>
              </ul>

              <u>We value excellence in:</u>
              <ul>
                  <li>Education</li>
                  <li>Professional pursuit</li>
                  <li>Leadership</li>
              </ul>
              
              <u>We obtain excellence through:</u>
              <ul>
                  <li>Integrity</li>
                  <li>Empowerment</li>
                  <li>Achievement</li>
                  <li>Diversity</li>
                  <li>Continuous Improvement</li>
              </ul>
        <h1>The Pillars of SHPE</h1>

    </Layout>
  )
}

export default OurMissionPage