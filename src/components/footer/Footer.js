import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { footer, contactContainer, contactItem } from "./footer.module.css"

const Footer = ({ contact: { phone, email }, description }) => {
  return (
    <>
      <footer className={footer}>
        <div>
          <div>
            <StaticImage
              src="../../../images/RAIPL.png"
              title="RAI PLUMBING LTD."
              aspectRatio={2 / 1}
              layout={"constrained"}
              width={100}
              placeholder="tracedSVG"
              alt="Image of text: 'RAI PLUMBING LTD.'"
            />
          </div>
          <p>{description}</p>
          <div className={contactContainer}>
            <span className={contactItem}>
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
            <span className={contactItem}>
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
      </footer>
    </>
  )
}
export default Footer
