import React from "react"
import { hamburger, filling } from "./hamburger.module.css"

const MobileNav = ({ toggle, setToggle }) => {
  return (
    <button
      className={hamburger}
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      <div className={filling}></div>
    </button>
  )
}

export default MobileNav
