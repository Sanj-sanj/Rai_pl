import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../nav/Nav.js"
import Hamburger from "../hamburger/Hamburger"

import {
  additionalInfoBar,
  headerContainer,
  header,
  navBlock,
  navMobile,
  navMobileClosed,
} from "./header.module.css"

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: null,
    innerHeight: null,
  })
  const [navStyle, setNavStyle] = useState(navBlock)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (windowSize.innerWidth >= 751) {
      return setNavStyle(navBlock)
    }
    if (toggle) {
      return setNavStyle(navMobile)
    }
    if (!toggle && navStyle !== navBlock) {
      setNavStyle(navMobileClosed)
    }
  }, [windowSize, toggle])

  useEffect(() => {
    const listenTo = debounce(getWindowSize)
    window.addEventListener("resize", listenTo)
    return () => {
      window.removeEventListener("resize", listenTo)
    }
  }, [])

  function debounce(func) {
    let timer
    return () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(func, 100)
    }
  }
  function getWindowSize() {
    console.log("resize")
    return setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    })
  }

  return (
    <header className={headerContainer}>
      <div className={additionalInfoBar}>
        <span>This is for stuff</span>
      </div>
      <div className={header}>
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
        <Hamburger toggle={toggle} setToggle={setToggle} />
        <Nav currStyle={navStyle} />
      </div>
    </header>
  )
}

export default Header
