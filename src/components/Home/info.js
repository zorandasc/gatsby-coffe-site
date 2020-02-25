import React from "react"

import Title from "../Globals/Title"
import { useIntl, Link } from "gatsby-plugin-intl"

const Info = () => {
  const intl = useIntl()
  return (
    <section className="py-5">
      <div className="container">
        <Title title={intl.formatMessage({ id: "titlestory" })}></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              {intl.formatMessage({ id: "story" })}
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                {intl.formatMessage({ id: "aboutpage" })}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
