import React, { useState } from "react"
import logo from "../../images/logo.svg"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import Language from "../language"
import links from "../constants/links"
import { useIntl } from "gatsby-plugin-intl"

const Navbar1 = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")

  const navbarHandler = () => {
    const nav = !navbarOpen
    const c = nav ? "collapse navbar-collapse show" : "collapse navbar-collapse"
    setNavbarOpen(nav)
    setCss(c)
  }
  const intl = useIntl()
  return (
    <nav className="navbar  navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo"></img>
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {intl.formatMessage({ id: link.text })}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon snipcart-checkout"></FaCartArrowDown>
          </li>
        </ul>
        <Language></Language>
      </div>
    </nav>
  )
}

export default Navbar1
