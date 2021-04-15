import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import checkIsCurrentPage from "../../helpers/styleNavUnderline"

import {
  header,
  nav,
  navLink,
  currentPage,
  order_1,
  order_2,
  order_3,
  stretch,
} from "./header.module.css"

const Header = () => {
  let temp = null
  return (
    <header className={header}>
      <Link to="/">
        <StaticImage
          src="../../../images/RAIPL.png"
          title="RAI PLUMBING LTD."
          aspectRatio={2 / 1}
          layout={"constrained"}
          width={100}
          placeholder="tracedSVG"
          alt="Image of text: 'RAI PLUMBING LTD.'"
          onMouseOver={e => console.log(e)}
        />
      </Link>

      <nav className={nav}>
        <Link
          className={`${navLink} ${order_1}`}
          activeClassName={currentPage}
          onAnimationEnd={e => checkIsCurrentPage(e, stretch)}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${navLink} ${order_2}`}
          activeClassName={currentPage}
          onAnimationEnd={e => checkIsCurrentPage(e, stretch)}
          to="/about/"
        >
          About
        </Link>
        <Link
          className={`${navLink} ${order_3} `}
          activeClassName={currentPage}
          onAnimationEnd={e => checkIsCurrentPage(e, stretch)}
          to="/contact/"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
export default Header
