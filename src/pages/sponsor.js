import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from 'react-bootstrap';
import { Container } from 'react-layout-components';
import SponsorTable from "../components/sponsor_table";
import { Link } from 'gatsby';

const SponsorPage = () => {
  return (
    <Layout pageTitle="Sponsors">
      <Container style={{textAlign:'center'}}>
        <h1>Our Proud Sponsors</h1>
        <a 
          href="https://www.peco.com/AboutUs/Pages/CompanyInformation.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{textAlign:'center'}}>
          <StaticImage
              alt="PECO Logo"
              src="../images/peco_logo.jpg"
              className="gatsbyRespImageImage"
              width={600}
            />
          </a>
        <p>
          PECO, founded in 1881, is Pennsylvania's largest electric and natural gas utility. Headquartered in Philadelphia, PECO delivers energy to more than 1.6 million electric customers and more than 532,000 natural gas customers in southeastern Pennsylvania. The company's 2,700 employees are dedicated to the safe and reliable delivery of electricity and natural gas as well as enhanced energy management conservation, environmental stewardship and community assistance. In 2018, PECO was named to Forbes Magazine's list of Best Employers for Women. The company also has an estimated annual economic impact of $4.8 billion in Pennsylvania, supporting more than 9,000 local jobs and producing $775 million in labor income. PECO is a subsidiary of Exelon Corporation (Nasdaq: EXC), the nation's only Fortune 100 utility and leading competitive energy provider.
        </p>
        <h1>Become A Sponsor</h1>
        <p style={{textAlign:'center'}}>Review our sponsorship packet and partnership opportunities below.
          For more information about our sponsorship package contact us at
          <a
            style={{marginLeft:'0.5em'}}
            href="mailto: gpc.shpe@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >
                gpc.shpe@gmail.com
          </a>
          .
        </p>
        <a
          to="/sponsorshipPacket.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          >
          <Button variant="primary" style={{marginBottom:'20px'}}>
            SHPE-GPC Sponsorship Packet
          </Button>
        </a>
        <SponsorTable />
      </Container>
    </Layout>
  )
}

export default SponsorPage