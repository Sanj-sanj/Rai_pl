import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  backgroundImg,
  textBox,
  textContainer,
  heroContentslayout,
} from "./hero.module.css"

const Hero = () => {
  return (
    <div className={backgroundImg}>
      <StaticImage
        src="../../../images/bathroom.jpg"
        alt=""
        layout={"constrained"}
        style={{ gridArea: "1/1", maxHeight: "65vh", minHeight: "65vh" }}
      />
      <div className={textBox}>
        <div className={heroContentslayout}>
          <h1>Hold on!</h1>
          <h2>Our site is under construction.</h2>
        </div>
      </div>
    </div>
  )
}
export default Hero
