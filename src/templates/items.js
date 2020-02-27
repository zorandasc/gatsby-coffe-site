import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

export const query = graphql`
  query($slug: String!) {
    item: contentfulCoffeeItem(slug: { eq: $slug }) {
      description {
        description
      }
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

const Items = ({ data }) => {
  const intl = useIntl()
  const { description, image } = data.item
  return (
    <Layout>
      <div>
        <Img fixed={image.fixed}></Img>
      </div>
      <div>{description.description}</div>
      <Link to={`/`}>{intl.formatMessage({ id: "back" })}</Link>
    </Layout>
  )
}

export default Items
