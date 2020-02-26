import React from "react"
import Title from "../Globals/Title"
import { useIntl } from "gatsby-plugin-intl"

const Contact = () => {
  const intl = useIntl()
  return (
    <section className="contact py-5">
      <Title title={intl.formatMessage({ id: "contact" })}></Title>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/zoran.dasic@mtel.ba" method="POST">
            <div>
              <label htmlFor="name">{intl.formatMessage({ id: "name" })}</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="pero peric"
                className="form-control"
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="pero@email.com"
                className="form-control"
              ></input>
            </div>
            <div>
              <label htmlFor="description">
                {intl.formatMessage({ id: "description" })}
              </label>
              <textarea
                name="descriptione"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Your description goes here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              {intl.formatMessage({ id: "submit" })}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
