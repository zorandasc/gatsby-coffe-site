import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"

import { useIntl } from "gatsby-plugin-intl"

const Products = props => {
  const intl = useIntl()
  return (
    <section className="py-5">
      <div className="container">
        <Title title={intl.formatMessage({ id: "product" })}></Title>
        <div className="row">
          {props.products.edges.map(({ node: product }) => {
            return <Product key={product.id} product={product}></Product>
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
