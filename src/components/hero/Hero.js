import React from "react"
// import { Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  backgroundImg,
  textBox,
  // textContainer,
  heroContentslayout,
  heroTopBox,
  heroInformationSection,
} from "./hero.module.css"

const Hero = () => {
  return (
    <div className={backgroundImg}>
      <StaticImage
        src="../../../images/bathroom.jpg"
        alt=""
        layout={"constrained"}
        style={{ gridArea: "1/1", maxHeight: "100vh", minHeight: "100vh" }}
      />
      <div className={textBox}>
        <div className={heroContentslayout}>
          <div className={heroTopBox}>
            <div className="box-left">
              <h2>Plumbing services for residential and commercial</h2>
              <h4>
                Servicing various regions of the lower mainland and Calgary.
              </h4>
            </div>
            <div className="box-right">
              <h3>This will contain contact form</h3>
            </div>
          </div>
        </div>
        <div className={heroInformationSection}>
          <p>
            With over 25 years of experience. The licensed crew at Rai Plumbing
            offers quality service with guaranteed customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Hero
