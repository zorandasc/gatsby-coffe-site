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

const Layout = ({ children }) => {
  useEffect(() => {})
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      <div id="fb-root"></div>
      <React.Fragment
        dangerouslySetInnerHTML={{
          __html: `
          <div className="fb-customerchat" page_id="119106702808633"></div>`,
        }}
      ></React.Fragment>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
