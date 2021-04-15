import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  header,
  nav,
  navLink,
  currentPage,
  order_1,
  order_2,
  order_3,
} from "./header.module.css"

const Header = () => {
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
          className={`${navLink} ${order_3}`}
          activeClassName={currentPage}
          to="/contact/"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
export default Header
