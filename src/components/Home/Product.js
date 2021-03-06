import React from "react"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"

const Product = ({ product }) => {
  const intl = useIntl()
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-3 mx-auto">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top"></Img>
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>{product.price}</h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-image={product.image.fluid.src}
            data-item-url="https://heuristic-perlman-cf8eb1.netlify.com/"
            data-item-description="Some fresh bacon"
          >
            {intl.formatMessage({ id: "cart" })}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
