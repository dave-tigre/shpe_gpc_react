import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'



const HistoryPage = () => {
  return (
    <Layout pageTitle="History">
      <Container>
        <StaticImage
            alt="SHPE-GPC Logo"
            src="../images/shpe_logo.jpg"
            objectPosition="center top"
          />
          <br></br>
        <h2 style={{marginTop:"10px"}}>SHPE History</h2>
        <p>
        The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles, California, in 1974 by a group of engineers employed by the City of Los Angeles. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community. The concept of networking was the key that would grow to encompass the nation as well as reach countries outside the United States. Today, SHPE enjoys a strong but independent network of professional and student chapters throughout the nation. By expanding at an aggressive pace and currently includes 170 student chapters with more than 7000 student members and 42 professional chapters with over 2000 professional members.
        </p>
        <StaticImage
            alt="Liberty Bell"
            src="../images/history/liberty_bell.jpg"
            imgStyle={{width: '100%'}}
            objectPosition="center"
          />
          <h2 style={{marginTop:"10px"}} >Goals & Objectives</h2>
          <p>
          The Greater Philadelphia Chapter (GPC) was founded in 1989, by a group of engineers who sought the need to expand SHPE to the East Coast. As one of the first chapters on the East coast, the chapter comprised of seven universities in Pennsylvania and Delaware with over 300 student and professional members. In 2004, GPC together with Region IV leadership helped establish the Western Pennsylvania Chapter (SHPE-WPA). Thus dividing the area and universities to better serve the growing membership. Today, SHPE-GPC provides support and resources to over 50 professional members and student chapters at Temple University, Drexel University, University of Pennsylvania, Lehigh University and University of Delaware.
          </p>

      </Container>
    </Layout>
  )
}

export default HistoryPage