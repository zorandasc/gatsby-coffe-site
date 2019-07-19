import React from "react"
import Title from "../Globals/Title"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="Contact us"></Title>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/zoran.dasic@mtel.ba" method="POST">
            <div>
              <label htmlFor="name">Name</label>
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
              <label htmlFor="description">Description</label>
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
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
