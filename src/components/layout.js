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
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>

      <div
        dangerouslySetInnerHTML={{
          __html: `
         <div id="fb-root"></div> <div className="fb-customerchat" page_id="119106702808633"></div>`,
        }}
      ></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
