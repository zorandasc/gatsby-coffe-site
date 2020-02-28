import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useIntl, Link } from "gatsby-plugin-intl"

export const query = graphql`
  query($slug: String!, $locale: String!) {
    item: contentfulCoffeeItem(
      slug: { eq: $slug }
      node_locale: { regex: $locale }
    ) {
      description {
        description
      }
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
      node_locale
      slug
    }
  }
`

const Items = ({ data }) => {
  console.log("data", data)
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
