import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import SponsorTable from "../components/sponsor_table"



const SponsorPage = () => {
  return (
    <Layout pageTitle="Sponsors">
      <h1>Our Proud Sponsors!</h1>
      <a href="https://www.peco.com/AboutUs/Pages/CompanyInformation.aspx">
        <StaticImage
            alt="PECO Logo"
            src="../images/peco_logo.jpg"
            className="gatsbyRespImageImage"
          />
      </a>
      <p>
        PECO, founded in 1881, is Pennsylvania's largest electric and natural gas utility. Headquartered in Philadelphia, PECO delivers energy to more than 1.6 million electric customers and more than 532,000 natural gas customers in southeastern Pennsylvania. The company's 2,700 employees are dedicated to the safe and reliable delivery of electricity and natural gas as well as enhanced energy management conservation, environmental stewardship and community assistance. In 2018, PECO was named to Forbes Magazine's list of Best Employers for Women. The company also has an estimated annual economic impact of $4.8 billion in Pennsylvania, supporting more than 9,000 local jobs and producing $775 million in labor income. PECO is a subsidiary of Exelon Corporation (Nasdaq: EXC), the nation's only Fortune 100 utility and leading competitive energy provider.
      </p>
      <p>
        Thank you for being a Platinum Sponsor!
      </p>
      <SponsorTable />
      
    </Layout>
  )
}

export default SponsorPage