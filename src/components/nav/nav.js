import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
// import Hamburger from "./Hamburger/Hamburger"
import checkIsCurrentPage from "../../helpers/styleNavUnderline"

import {
  nav,
  navMobile,
  navMobileClosed,
  navLink,
  currentPage,
  order_1,
  order_2,
  order_3,
  stretch,
} from "./nav.module.css"

const Nav = ({ currStyle }) => {
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  // const [navStyle, setNavStyle] = useState(nav)
  // const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   if (innerWidth >= 751) {
  //     return setNavStyle(nav)
  //   }
  //   if (toggle) {
  //     return setNavStyle(navMobile)
  //   }
  //   if (!toggle && navStyle !== nav) {
  //     setNavStyle(navMobileClosed)
  //   }
  // }, [innerWidth, toggle])

  // function debounce(func) {
  //   let timer
  //   return () => {
  //     if (timer) clearTimeout(timer)
  //     timer = setTimeout(func, 100)
  //   }
  // }
  // function getWindowSize() {
  //   console.log("ds")
  //   return setInnerWidth(window.innerWidth)
  // }
  // useEffect(() => {
  //   const listenTo = debounce(getWindowSize)
  //   window.addEventListener("resize", listenTo)
  //   return () => {
  //     window.removeEventListener("resize", listenTo)
  //   }
  // }, [])

  return (
    <>
      {/* <Hamburger toggle={toggle} setToggle={setToggle} /> */}
      <nav
        className={currStyle}
        onAnimationEnd={e => checkIsCurrentPage(e, stretch)}
      >
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
    </>
  )
}
export default Nav
