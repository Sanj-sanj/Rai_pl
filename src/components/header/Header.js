import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../nav/Nav.js"
import Hamburger from "../hamburger/Hamburger"

import {
  additionalInfoBar,
  headerContainer,
  headerContainerCompact,
  headerTop,
  header,
  navBlock,
  navMobile,
  navMobileClosed,
} from "./header.module.css"

const Header = () => {
  const [navStyle, setNavStyle] = useState(navBlock)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (toggle) {
      return setNavStyle(navMobile)
    }
    if (!toggle && navStyle !== navBlock) {
      setNavStyle(navMobileClosed)
    }
  }, [toggle])

  useEffect(() => {
    const measureWidth = window.addEventListener(
      "resize",
      debounce(getWindowWidth)
    )
    window.onscroll = debounce(getHeaderPosition)
    return () => {
      window.removeEventListener("resize", measureWidth)
      window.onscroll = null
    }
  }, [])

  function debounce(func) {
    let timer
    return () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(func, 100)
    }
  }
  function getWindowWidth() {
    if (window.innerWidth >= 768 && navStyle !== navBlock) {
      return setNavStyle(navBlock)
    }
  }

  function getHeaderPosition() {
    const body = document.querySelector("body")
    const position = body.getBoundingClientRect().top
    const header = document.querySelector("header")
    if (position < 0 && !header.classList.contains(headerContainerCompact)) {
      return header.classList.add(headerContainerCompact)
    }
    if (position === 0 && header.classList.contains(headerContainerCompact)) {
      return header.classList.remove(headerContainerCompact)
    }
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
