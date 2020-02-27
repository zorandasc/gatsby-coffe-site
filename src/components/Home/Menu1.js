import React, { useState } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby"

function getCategories(items) {
  let tempItems = items.map(items => {
    return items.node.category
  })

  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

const Menu1 = props => {
  const [items] = useState(props.items.edges)
  const [coffeeItems, setCoffeeItems] = useState(props.items.edges)
  const [categories] = useState(() => getCategories(props.items.edges))

  const intl = useIntl()

  const handleItems = category => {
    let allItems = [...items]
    if (category === "all") {
      setCoffeeItems(allItems)
    } else {
      const filtered = allItems.filter(({ node }) => node.category === category)
      setCoffeeItems(filtered)
    }
  }

  if (items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title={intl.formatMessage({ id: "best" })}></Title>
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => {
                return (
                  <button
                    className="btn btn-yellow text-capitalize m-3"
                    type="button"
                    key={index}
                    onClick={() => handleItems(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {coffeeItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 mx-auto d-flex"
                >
                  <div>
                    <Img fixed={node.image.fixed}></Img>
                  </div>

                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>{node.price}$</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <Link to={`/items/${node.slug}`}>
                      {intl.formatMessage({ id: "detail" })}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu"></Title>
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items todisplay</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu1
