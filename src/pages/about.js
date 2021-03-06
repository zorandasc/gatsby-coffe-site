import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/info"
import { useIntl } from "gatsby-plugin-intl"

const AboutPage = ({ data }) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={intl.formatMessage({ id: "about" })}
        styleClass="about-background"
      ></BackgroundSection>
      <Info></Info>
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid(sizes: "") {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
