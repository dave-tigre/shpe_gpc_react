import * as React from 'react'
import Layout from '../components/layout'
import BootstrapCarousel  from '../components/carousel'
import  'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <BootstrapCarousel carouselHeight={200} imageHeight={200}/>
      <p>
        SHPE-GPC represents the premier organization aimed at increasing the number of Hispanics contributing to the nation’s innovation and technology future. We recognize that in order to realize professional and personal development, Networking is an essential component. Please visit our website for our upcoming events, as well as events hosted by our community partners in the Greater Philadelphia region.
      </p>
      
    </Layout>
  )
}

export default IndexPage