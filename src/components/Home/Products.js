import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
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

const Products = () => {
  const intl = useIntl()
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title={intl.formatMessage({ id: "product" })}></Title>
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product}></Product>
                })}
              </div>
            </div>
          </section>
        )
      }}
    ></StaticQuery>
  )
}

export default Products
