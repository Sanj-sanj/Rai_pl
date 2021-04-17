import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../nav/nav"

import { header } from "./header.module.css"

const Header = () => (
  <header className={header} onScroll={e => console.log(e)}>
    <Link to="/">
      <StaticImage
        src="../../../images/RAIPL.png"
        title="RAI PLUMBING LTD."
        aspectRatio={2 / 1}
        layout={"constrained"}
        width={100}
        placeholder="tracedSVG"
        alt="Image of text: 'RAI PLUMBING LTD.'"
      />
    </Link>
    <Nav />
  </header>
)

export default Header
