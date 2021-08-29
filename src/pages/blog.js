import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      
    </Layout>
  )
}

// graphql querys need to be done outside of page component
export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default BlogPage