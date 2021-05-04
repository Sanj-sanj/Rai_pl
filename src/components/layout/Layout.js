import React from "react"
import Helmet from "react-helmet"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Hero from "../hero/Hero"
import { main, layoutBody } from "./layout.module.css"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Layout = ({ children }) => {
  const { title, description, contact } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={title} title={description} />
      </Helmet>
      {/* Actual site header goes here. */}
      <div className={layoutBody}>
        <Header contact={contact} />
        <Hero />
        {/* site content goes here */}
        <div className={main}>{children}</div>
      </div>
      {/* footer goes here */}
      <Footer />
    </>
  )
}
export default Layout
