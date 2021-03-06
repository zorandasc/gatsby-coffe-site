import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import Menu1 from "../components/Home/Menu1"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

import { useIntl } from "gatsby-plugin-intl"

const IndexPage = ({ data }) => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "home" })} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={intl.formatMessage({ id: "regular" })}
        styleClass="default-background"
      ></BackgroundSection>
      <Info></Info>
      <Menu1 items={data.menu}></Menu1>
      <Products products={data.products}></Products>
      <Contact></Contact>
    </Layout>
  )
}

export const query = graphql`
  query($locale: String!) {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulCoffeeItem(filter: { node_locale: { regex: $locale } }) {
      edges {
        node {
          id
          title
          slug
          node_locale
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    products: allContentfulCoffeeProduct(
      filter: { node_locale: { regex: $locale } }
    ) {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
