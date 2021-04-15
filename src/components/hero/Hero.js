import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { backgroundImg, textBox, textContainer } from "./hero.module.css"

const Hero = () => {
  return (
    <div className={backgroundImg}>
      <StaticImage
        src="../../../images/whale.jpg"
        alt=""
        aspectRatio={3 / 1}
        style={{ gridArea: "1/1", minHeight: "50vh" }}
      />
      <div className={textBox}>
        <div className={textContainer}>
          <h1>Welcome to my site</h1>
          <Link to="/about/">Click here to learn more about me &rarr;</Link>
        </div>
      </div>
    </div>
  )
}
export default Hero
