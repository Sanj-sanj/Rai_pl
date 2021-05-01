import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../nav/Nav.js"
import Hamburger from "../hamburger/Hamburger"

import {
  additionalInfoBar,
  headerContainer,
  headerTop,
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
      <div className={headerTop}>
        <div className={additionalInfoBar}>
          <span>
            <StaticImage
              objectFit="contain"
              src="../../../static/pin.svg"
              alt="location pin"
              layout="constrained"
              width={20}
              placeholder="tracedSVG"
            />
            <a href="tel:+16048973869">+1 604-897-3869</a>
          </span>
          <span>
            <StaticImage
              objectFit="contain"
              src="../../../static/mail.svg"
              alt="mail"
              layout="constrained"
              width={20}
              placeholder="tracedSVG"
            />
            <a href="mailto: info@raiplumbing.com">Info@raiplumbing.com</a>
          </span>
        </div>
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
