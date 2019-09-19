/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import Fb from "../components/fb"
import ReactDOM from "react-dom"

const Layout = ({ children }) => {
  useEffect(() => {
    const container = document.createElement("div")
    ReactDOM.createPortal(<Fb />, container)
  })
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
