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

const Layout = ({ children }) => {
  useEffect(() => {
    const div1 = document.createElement("div")
    div1.id = "fb-root"
    document.body.appendChild(div1)

    const div2 = document.createElement("div")
    div2.className = "fb-customerchat"
    div2.setAttribute("page_id", "119106702808633")
    document.body.appendChild(div2)
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
