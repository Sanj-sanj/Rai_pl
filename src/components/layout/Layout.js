import React from "react"
import Helmet from "react-helmet"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Hero from "../hero/Hero"
import { main, container } from "./layout.module.css"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div className={container}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={title} title={description} />
      </Helmet>
      {/* Actual site header goes here. */}
      <Header />
      <Hero />
      {/* site content goes here */}
      <div className={main}>{children}</div>
      {/* footer goes here */}
      <Footer />
    </div>
  )
}
export default Layout
