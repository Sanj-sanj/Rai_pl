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
        src="../../../images/sink.webp"
        alt=""
        layout={"constrained"}
        style={{ gridArea: "1/1", maxHeight: "100vh", minHeight: "100vh" }}
        quality="100"
      />
      <div className={textBox}>
        <div className={heroContentslayout}>
          <div className={heroTopBox}>
            <div className="box-left">
              <h2>New Residential and Commercial construction</h2>
              <h4>
                Servicing various regions of the greater Vancouver region.
              </h4>
            </div>
            <div className="box-right">
              <h3>This will contain contact form</h3>
            </div>
          </div>
        </div>
        <div className={heroInformationSection}>
          <p>
            With over 28 years of experience offering Plumbing and Hydronic
            Heating Services.
          </p>
          <p>
            The licensed crew at Rai Plumbing offers quality service with
            guaranteed customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Hero
