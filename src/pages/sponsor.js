import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const SponsorPage = () => {
  return (
    <Layout pageTitle="Sponsors">
      <h1>Our Proud Sponsors!</h1>
      <StaticImage
          alt="PECO Logo"
          src="../images/peco_logo.jpg"
          objectPosition="center top"
          imgStyle={{width: '100%'}}
        />
    </Layout>
  )
}

export default SponsorPage