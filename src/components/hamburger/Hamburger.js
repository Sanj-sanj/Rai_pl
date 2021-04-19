import React from "react"
import { hamburgerArea, filling } from "./hamburger.module.css"

const MobileNav = ({ toggle, setToggle }) => {
  return (
    <button
      className={hamburgerArea}
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      <div className={filling}></div>
    </button>
  )
}

export default MobileNav
