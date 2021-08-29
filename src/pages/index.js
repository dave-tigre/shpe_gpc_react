import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div style={{maxwidth:"1000px"}}>
        <StaticImage
          alt="SHPE-GPC Logo"
          src="../images/shpe_logo.jpg"
          objectPosition="center top"
          imgStyle={{width: '100%'}}
        />
      </div>
      
    </Layout>
  )
}

export default IndexPage