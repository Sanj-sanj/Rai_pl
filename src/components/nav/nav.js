import React from "react"
import { Link } from "gatsby"
import checkIsCurrentPage from "../../helpers/styleNavUnderline"

import {
  nav,
  navLink,
  currentPage,
  order_1,
  order_2,
  order_3,
  stretch,
} from "./nav.module.css"

const Nav = () => (
  <nav className={nav} onAnimationEnd={e => checkIsCurrentPage(e, stretch)}>
    <Link
      className={`${navLink} ${order_1}`}
      activeClassName={currentPage}
      to="/"
    >
      Home
    </Link>
    <Link
      className={`${navLink} ${order_2}`}
      activeClassName={currentPage}
      to="/about/"
    >
      About
    </Link>
    <Link
      className={`${navLink} ${order_3} `}
      activeClassName={currentPage}
      to="/contact/"
    >
      Contact
    </Link>
  </nav>
)
export default Nav
