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
  headerBottom,
  navBlock,
  navMobile,
  navMobileClosed,
} from "./header.module.css"

const Header = ({ contact: { phone, email } }) => {
  const [navStyle, setNavStyle] = useState(navBlock)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 768) {
      return setNavStyle(navBlock)
    }
    if (toggle) {
      return setNavStyle(navMobile)
    }
    if (!toggle && navStyle !== navBlock) {
      setNavStyle(navMobileClosed)
    }
  }, [toggle, navStyle])

  useEffect(() => {
    const measureWidth = window.addEventListener(
      "resize",
      debounce(defaultNavStyle)
    )
    window.onscroll = debounce(getHeaderPosition)
    return () => {
      window.removeEventListener("resize", measureWidth)
      window.onscroll = null
    }
  })

  function debounce(func) {
    let timer
    return () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(func, 100)
    }
  }
  function defaultNavStyle() {
    if (window.innerWidth >= 768 && navStyle !== navBlock) {
      return setToggle(false)
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
              src="../../../static/phone.svg"
              alt="location pin"
              layout="constrained"
              width={20}
              placeholder="tracedSVG"
            />
            <a href={`tel: ${phone.replaceAll("-", "")}`}>{phone}</a>
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
            <a href={`mailto: ${email}`}>{email}</a>
          </span>
        </div>
      </div>
      <div className={headerBottom}>
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
